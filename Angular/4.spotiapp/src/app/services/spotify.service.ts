import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  // Función para hacer peticion al servicio de spotify
  getQuerySpotify( query: string ) {

    const url = 'https://api.spotify.com/v1/';

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQAlPLpuh_7dBYbyyg48GPvXTi5_if_M3kaImuvioqjaHcixX6qaHQEyU_cZe_TV4Cyb_LzYhFJwhL66N8U'
     });

     // Retorna la respuesta del get con la url de spotify
     return this.http.get( url + query, { headers });

  }

  // Funciones para obtener datos del servicio ( Observadores )
  getNewRelease() {
    // Retorna el resultado del query con el filtro para solo obtener solo el objeto albmums
    return this.getQuerySpotify('browse/new-releases').pipe( map( data => data['albums'].items));
  }

  getArtistas(termino: string) {
    // Retorna el resultado del query con el filtro para solo obtener solo el objeto artists
   return this.getQuerySpotify(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }

  getArtista(id: any) {
    // Retorna el resultado del query
   return this.getQuerySpotify(`artists/${ id }`);
   /* .pipe( map( data => data['artists'].items )); */
  }

  getTopTracks(id: any) {
    // Retorna el resultado del query, lleva pipe por que necesitamos tracks, pero como track es arreglo [] no lleva "."
   return this.getQuerySpotify(`artists/${id}/top-tracks?country=es`).pipe( map( data => data['tracks']));
  }
}

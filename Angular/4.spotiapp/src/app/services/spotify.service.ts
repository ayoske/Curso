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
      'Authorization': 'Bearer BQDArLe8NfcI6jtH_duNAZIJoacUiD7ASHCDfApLRcmxMx4OrzoW4MUFhEJWMJT_fQvIGZGwV62xAIYetQA'
     });

     // Retorna la respuesta del get con la url de spotify
     return this.http.get( url + query, { headers });

  }

  // Funciones para obtener datos del servicio ( Observadores )
  getNewRelease() {
    // Retorna el resultado del query con el filtro para solo obtener solo el objeto albmums
    return this.getQuerySpotify('browse/new-releases').pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string) {
    // Retorna el resultado del query con el filtro para solo obtener solo el objeto artists
   return this.getQuerySpotify(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }
}

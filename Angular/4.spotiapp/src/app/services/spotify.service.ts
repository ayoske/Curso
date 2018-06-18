import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string ) {

    const url = 'https://api.spotify.com/v1/';

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQDuKOj2y7KSFrnuHV3tkUGqDTs4BxeJ_96x0bmhkaXx0z2-wfFMeSdjVDEXxSxcfqoJtltTLdWKPGVjXjU'
     });

     return this.http.get( url + query, { headers });

  }

  getNewRelease() {
    return this.getQuery('browse/new-releases').pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string) {
   return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }
}

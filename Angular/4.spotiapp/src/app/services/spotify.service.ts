import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewRelease() {

    const headers: HttpHeaders = new HttpHeaders({
       'Authorization': 'Bearer BQBr6AG_Ls5X8qFtWJsgdoEE0tWAT92sAls0G16Qbp6MJq25MEd8ui2l8GedUF3nMsNZ9QKFb7_DJFOVal4'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers }).subscribe( data => {
      console.log( data );
    });
  }
}

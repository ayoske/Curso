import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewRelease() {

    const headers: HttpHeaders = new HttpHeaders({
       'Authorization': 'Bearer BQCl4vkvRFbaJ-lWE_y-kWFti7sTlAEguvLb3ACuWVJZC3ay2HiiIL-hiYxSQtYUKVAeh4vvMSKpl2Dj32w'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

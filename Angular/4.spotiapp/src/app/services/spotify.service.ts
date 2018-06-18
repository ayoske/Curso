import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewRelease() {

    const headers: HttpHeaders = new HttpHeaders({
       'Authorization': 'Bearer BQBUhv6o_Iua3A_MtRzzSUfhgiqPQ-K5FXa-6tlz7kLc32COIDkDaJafxFSa0W2GziDpLetQMrGtl_Z1WUw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string) {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQBUhv6o_Iua3A_MtRzzSUfhgiqPQ-K5FXa-6tlz7kLc32COIDkDaJafxFSa0W2GziDpLetQMrGtl_Z1WUw'
   });

   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}

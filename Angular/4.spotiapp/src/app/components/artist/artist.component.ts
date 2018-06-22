import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  loadingArtist = true;
  artista: any = {};

  constructor( private activatedRouter: ActivatedRoute,
               private spotify: SpotifyService ) {

    this.loadingArtist = true;
    this.activatedRouter.params.subscribe( params => {
       /* console.log( params ); */
       this.getArtista( params['id']);
    });
  }

  getArtista(id) {
    this.loadingArtist = true;
    this.spotify.getArtista( id ).subscribe( artista => {
      /* console.log(artista); */
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  ngOnInit() {
  }

}

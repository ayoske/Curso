import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  errorServicio: boolean;
  mensajeError: string;

  constructor( private spotifyService: SpotifyService ) {

    this.spotifyService.getNewRelease().subscribe( (data: any) => {
       console.log( data );
       this.nuevasCanciones = data;
       this.loading = false;
    }, (errorServicio) => {
      console.log(errorServicio);
      this.loading = false;
      this.errorServicio = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}

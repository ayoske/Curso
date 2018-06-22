import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { Route } from './app.routes';
import { RouterModule } from '@angular/router';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroSpotyPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetaComponent,
    LoadingComponent,
    DomseguroSpotyPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( Route, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

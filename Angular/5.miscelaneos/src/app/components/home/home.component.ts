import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <p appResaltado='orange'>Hola Mundo, eta es una prueba de una directiva</p>
  <app-ng-swich></app-ng-swich>
  `,
  styles: []
})
export class HomeComponent {

  constructor() { }



}

import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  nombre = 'Armando';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = .234;

  salario = 243.5;

  hombre = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 'Mansion x'
    }
  };

  // tslint:disable-next-line:no-shadowed-variable
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llegó la data'), 3500);
  });

  fecha = new Date();

}

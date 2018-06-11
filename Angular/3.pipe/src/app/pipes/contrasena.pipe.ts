import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  numero: number;
  nombre: string = '';

  transform(value: any, activar: any = true): any {

    if (activar) {

      this.numero = 0;
      this.nombre = ' ' ;
      this.numero = value.length;

      for ( let i = 0 ; i < this.numero; i++ ) {
        this.nombre += '*';
      }
      return this.nombre;

    } else {
      return value;
    }
  }

}

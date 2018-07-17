import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { 
    this.route.parent.params.subscribe( parametros => {  
      console.log('Ruta hija detalle usuario');
      console.log(parametros);      
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  termino: any;

  constructor( private router: Router ) {

  }

  ngOnInit() {
  }

  buscarHeroe( termino: string) {
    this.router.navigate(['/busqueda', termino]);
  }

}

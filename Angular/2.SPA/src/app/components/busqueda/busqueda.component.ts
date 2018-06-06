import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})

export class BusquedaComponent implements OnInit {

  @Input() heroes: any;
  @Input() index;
  heroesArr: any = [];
  termino: any;

  constructor( private _heroesService: HeroesService,
               private activatedRouter: ActivatedRoute,
               private router: Router) {

    this.activatedRouter.params.subscribe( params => {
      this.termino = params['termino'] ;

      if (params['termino'] !== undefined) {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroe(this.termino);
      }

    });
  }

  ngOnInit() {
    this.heroesArr = this._heroesService.getHeroes();
    console.log(this.heroesArr);
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }

}

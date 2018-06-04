import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRouter: ActivatedRoute,
               private _heroesService: HeroesService,
              private router: Router) {

      this.activatedRouter.params.subscribe( params => {
        this.heroe = this._heroesService.getHeroe( params['id'] );
        console.log(this.heroe);
      });
  }

  regresaHeroes() {
    this.router.navigate(['/heroes']);
  }

}

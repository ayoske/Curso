import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    console.log(next);

    if ( this.auth.isAuthenticated()) {
      console.log('Paso el gard');
      return true;
    } else {
      console.log('Bloqueado por el guard');
      return false;
    }
  }

}

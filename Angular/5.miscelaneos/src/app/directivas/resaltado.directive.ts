import { Directive, ElementRef, HostListener, Input} from '@angular/core';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input( 'appResaltado' )nuevoColor: string;

  constructor( private el: ElementRef ) {
    console.log('directiva funcionando');  
    
    /* el.nativeElement.style.backgroundColor = 'yellow'; */
  }

  

  @HostListener( 'mouseenter' )mouseEntro() {
    console.log( this.nuevoColor );
    this.resaltar( this.nuevoColor || 'yellow' );
    /* this.el.nativeElement.style.backgroundColor = 'yellow'; */
  }
  
  @HostListener( 'mouseleave' )mouseSalio() {
    this.resaltar( null );
    /* this.el.nativeElement.style.backgroundColor = null ; */
  }

  private resaltar(color: string) {
   this.el.nativeElement.style.backgroundColor = color;
  }

}

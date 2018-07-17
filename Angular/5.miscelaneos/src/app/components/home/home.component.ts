import { Component, OnInit, OnChanges, OnDestroy, 
  DoCheck, AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit  
} from '@angular/core';

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
export class HomeComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked, 
                                      AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {
  
 ngOnInit() {
    console.log('OnInit');    
  }

  ngOnChanges() {
    console.log('OnChange');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    console.log('OnDoCheck');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

  constructor() { }

}

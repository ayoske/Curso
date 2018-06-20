import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

  // Se importa variable items, que viene de donde se usa el componente tarjeta "<app-tarjeta [items]="artistas" >"
  @Input() items: any[] = [];

  constructor() { }

}

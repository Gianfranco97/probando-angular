import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {

  constructor() { }

  contador:number = 0

  sumar() {
    this.contador++
  }

  restar() {
    if (this.contador > 0)
      this.contador--
  }
}

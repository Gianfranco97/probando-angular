import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  contador:number = 0

  sumar(): void {
    this.contador++
  }

  restar(): void {
    if (this.contador > 0)
      this.contador--
  }
}

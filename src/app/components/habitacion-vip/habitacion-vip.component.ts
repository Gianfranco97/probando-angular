import { Component } from '@angular/core';

@Component({
  selector: 'app-habitacion-vip',
  templateUrl: './habitacion-vip.component.html',
  styleUrls: ['./habitacion-vip.component.scss']
})
export class HabitacionVipComponent {

  constructor() { }

  nivel:number = 0
  isVIP:boolean = false

  subirNivel() {
    if (this.nivel < 10) this.nivel ++
  }

  puertaVIP() {
    this.isVIP = !this.isVIP
  }
}

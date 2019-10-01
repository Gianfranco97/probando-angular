import { Component } from '@angular/core';

@Component({
  selector: 'app-habitacion-vip',
  templateUrl: './habitacion-vip.component.html',
  styleUrls: ['./habitacion-vip.component.scss']
})
export class HabitacionVipComponent {
  nivel:number = 0
  isVIP:boolean = false

  subirNivel(): void {
    if (this.nivel < 10) this.nivel ++
  }

  puertaVIP(): void {
    this.isVIP = !this.isVIP
  }
}

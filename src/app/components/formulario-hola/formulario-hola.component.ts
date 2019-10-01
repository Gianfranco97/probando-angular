import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-hola',
  templateUrl: './formulario-hola.component.html',
  styleUrls: ['./formulario-hola.component.scss']
})
export class FormularioHolaComponent {

  nombre: string = ''

  sexo: string = 'Hombre'

  activarBoton: boolean = true

  validador(): void {
    if (this.nombre.length > 0 && this.sexo.length > 0) {
      this.activarBoton = false
    } else {
      this.activarBoton = true
    }
  }

  saludar(): void {
    alert(`Hola ${this.sexo === "Hombre" ? "Sr." : "Sra."} ${this.nombre}`)
  }

}

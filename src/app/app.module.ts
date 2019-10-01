import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { ContadorComponent } from './components/contador/contador.component';
import { HomeComponent } from './components/home/home.component';
import { HabitacionVipComponent } from './components/habitacion-vip/habitacion-vip.component';
import { FormularioHolaComponent } from './components/formulario-hola/formulario-hola.component';

@NgModule({
  declarations: [
    ContadorComponent,
    HomeComponent,
    HabitacionVipComponent,
    FormularioHolaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule { }

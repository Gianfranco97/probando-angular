import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './components/contador/contador.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ContadorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }

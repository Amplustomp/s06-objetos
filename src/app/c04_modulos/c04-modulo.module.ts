import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page';


@NgModule({
  declarations: [
    // Como siempre declaramos nuestro componente
    MainPageComponent
  ],
  exports:[
    // Lo Agregamos en el export, 
    //      ya que lo utilizaremos en la página principal, 
    //      fuera del módulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class C04ModuloModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page';
import { MiCompInputComponent } from './mi-comp-input/mi-comp-input';
import { MiCompOutputComponent } from './mi-comp-output/mi-comp-output';
import { C05ModuloModule } from '../c05_modulos/c05-componentes.module';


@NgModule({
  declarations: [
    // Como siempre declaramos nuestro componente
    MainPageComponent,
    MiCompInputComponent,
    MiCompOutputComponent
  ],
  exports:[
    // Lo Agregamos en el export, 
    //      ya que lo utilizaremos en la página principal, 
    //      fuera del módulo
    MainPageComponent
  ],
  imports: [
    CommonModule,
    C05ModuloModule
  ]
})
export class C04ModuloModule { }
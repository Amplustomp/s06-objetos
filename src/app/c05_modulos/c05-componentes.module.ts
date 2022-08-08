import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiServAddComponent } from './mi-serv-add/mi-serv-add';
import { MiServListaComponent } from './mi-serv-lista/mi-serv-lista';
import { PersonaServices } from './mi-serv-lista/persona.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      // Como siempre declaramos nuestro componente
      MiServAddComponent,
      MiServListaComponent
    ],
    exports:[
      // Lo Agregamos en el export, 
      //      ya que lo utilizaremos en la página principal, 
      //      fuera del módulo
      MiServAddComponent,
      MiServListaComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    providers: [PersonaServices],
  })
  export class C05ModuloModule { }
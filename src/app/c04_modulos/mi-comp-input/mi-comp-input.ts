import { Component, Input, OnInit } from '@angular/core';
import { iPersona } from '../interfaces/iPersona';
@Component({
  selector: 'app-mi-comp-input',
  templateUrl: './mi-comp-input.html',
})

export class MiCompInputComponent {
  // Input Importar en la primera linea  ==> @angular/core
  // El decorador input, permite recibir data de otro componente
  @Input()
  //lista_personas:any[]=[]
  // después agregamos la interface
  lista_personas:iPersona[]=[]

  // El decorador input, permite recibir data de otro componente
  @Input('lista_personas_data')
  //lista_personas_v2:any[]=[]
  // después agregamos la interface
  lista_personas_v2:iPersona[]=[]  
}
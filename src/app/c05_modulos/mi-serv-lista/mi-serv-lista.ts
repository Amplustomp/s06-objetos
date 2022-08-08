import { Component, OnInit } from '@angular/core';
import { iPersona } from 'src/app/c04_modulos/interfaces/iPersona';
import { PersonaServices } from './persona.servicio';
@Component({
  selector: 'app-mi-serv-lista',
  templateUrl: './mi-serv-lista.html',
})
export class MiServListaComponent {
  // Nos permite injectar el Servicio de Personas
  // Queda como Público
  // Recordar realizar el import
  constructor(public servPersonas:PersonaServices) { }

  // Lo Utilizamos como puente, para que lo utilice el HTML
  // Retorna los registros desde el servicio
  get listaPersonas():iPersona[]{
    return this.servPersonas.getPersonas;
  }
}


import { Component, OnInit } from '@angular/core';
import { iPersona } from 'src/app/c04_modulos/interfaces/iPersona';
import { PersonaServices } from '../mi-serv-lista/persona.servicio';
@Component({
  selector: 'app-mi-serv-add',
  templateUrl: './mi-serv-add.html',
})
export class MiServAddComponent {
  // Creamos una variable, la cual nos permita vincularla, con los campos del HTML
  // Utilizamos iPersona, recordar Importar el archivo de la interface
  persona_serv:iPersona= {
    run:1,
    nombres:"Sergio Servicio",
    apPaterno:"Service Cortés",
    apMaterno:"Materno Pérez",
    edad:33,
  }

  // Injectamos el servicio  Personas
  // Recordar importar el archivo del servicio
  constructor(public servPersonas:PersonaServices) { }

  // Método que permite enviar los datos al servicio
  agregarSinEvento(){
    // Solo una validación cualquiera
    if ( this.persona_serv.nombres.trim().length === 0 ) { return; }
    console.log("Persona Service",this.persona_serv)


    // Envia los datos al servicio
    this.servPersonas.addPersona(this.persona_serv)
    
    // Inicializo para que no quede como referencia
    this.persona_serv= {
      run: this.persona_serv.run,
      nombres: this.persona_serv.nombres,
      apPaterno: this.persona_serv.apPaterno,
      apMaterno: this.persona_serv.apMaterno,
      edad: this.persona_serv.edad,
    }
  }
  
}  
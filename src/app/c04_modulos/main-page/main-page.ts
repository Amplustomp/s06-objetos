import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { iPersona } from '../interfaces/iPersona';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.css'],
})
export class MainPageComponent {

 // Debemos importar iPersonas
  // Creamos la variable persona_n1, la cual utilizaremos dentro de los formularios
  persona_n1:iPersona= {
    run:1,
    nombres:"Sergio Daniel",
    apPaterno:"Cortés",
    apMaterno:"Pérez",
    edad:10,
  }  
  
  
  
    // Creamos un Arreglo con Estructura
    //      estructura se la damos con las llaves, y los nombres de los campos
    lPersonas:iPersona[]=[{nombres:"Carlos",apPaterno:"Vega",apMaterno:"Osorio",edad:109,run:90}
                            ,{nombres:"Pedro",apMaterno:"Pereira",edad:209,apPaterno:"Pinto",run:10}]


    agregarEvent(evento:any){
        //Evita refresh de la página
        // aún así se refresca el objeto
        evento.preventDefault()
        console.log("evento" , evento)
        //console.log("target" , evento.target)
        // Rescatamos los valores por medio del evento
        // Problema de las posiciones de los campos

        //console.log(this.lPersonas.sort(function(a, b){return a.run - b.run}).find(e => e.run === evento.srcElement[0].value))

        this.lPersonas.sort(function(a, b){return a.run - b.run});

        if (this.lPersonas.find(e => e.run === evento.srcElement[0].value)) {
            console.log('valor ya existe')
        }

        else {

        this.persona_n1.run = evento.srcElement[0].value
        this.persona_n1.nombres = evento.srcElement[1].value
        this.persona_n1.apPaterno = evento.srcElement[2].value
        this.persona_n1.apMaterno = evento.srcElement[3].value
        this.persona_n1.edad = evento.srcElement[4].value
        // Agregamos el registro al arreglo
        
        this.lPersonas.push(this.persona_n1)
    
        this.persona_n1 = {
            run: evento.srcElement[0].value,
            nombres: evento.srcElement[1].value,
            apPaterno: evento.srcElement[2].value,
            apMaterno: evento.srcElement[3].value,
            edad: evento.srcElement[4].value,
          }  
          this.lPersonas.sort(function(a, b){return a.run - b.run});
        }
        }

}  




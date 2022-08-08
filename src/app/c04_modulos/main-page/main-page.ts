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

          // Método que permite realizar los cambios necesarios
          // Angular detecta los cambio y redespliega el HTML                        
          cambiarNombre(evento:any){
            console.log(evento)
            // Revisar el objeto en la consola borwser (F12)
            console.log("valor:" ,evento.target.value)
            this.persona_n1.nombres = evento.target.value
          }

          cambiarRun(evento:any){
            console.log(evento)
            // Revisar el objeto en la consola borwser (F12)
            console.log("valor:" ,evento.target.value)
            this.persona_n1.run = evento.target.value
          }

          cambiarPaterno(evento:any){
            console.log(evento)
            // Revisar el objeto en la consola borwser (F12)
            console.log("valor:" ,evento.target.value)
            this.persona_n1.apPaterno = evento.target.value
          }

          cambiarMaterno(evento:any){
            console.log(evento)
            // Revisar el objeto en la consola borwser (F12)
            console.log("valor:" ,evento.target.value)
            this.persona_n1.apMaterno = evento.target.value
          }

          cambiarEdad(evento:any){
            console.log(evento)
            // Revisar el objeto en la consola borwser (F12)
            console.log("valor:" ,evento.target.value)
            this.persona_n1.edad = evento.target.value
          }

  agregarSinEvent(){
    
    // Nombres no tiene two way DataBind, o sea no tiene ngModel
    if (this.persona_n1.apMaterno.trim().length==0){
           console.log("Error Nombre en Blanco")
           return
       }

       this.lPersonas.sort(function(a, b){return a.run - b.run});

       if (this.lPersonas.find(e => e.run === this.persona_n1.run)) {
           console.log('valor ya existe')
       }

       else {

    console.log("Persona",this.persona_n1)
    this.lPersonas.push(this.persona_n1)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia

    this.persona_n1 = {
      run: this.persona_n1.run,
      nombres: this.persona_n1.nombres,
      apPaterno: this.persona_n1.apPaterno,
      apMaterno: this.persona_n1.apMaterno,
      edad: this.persona_n1.edad,
  
    }
    }
    this.lPersonas.sort(function(a, b){return a.run - b.run});
  }

  agregarNgModel(){

    if (this.persona_n1.apMaterno.trim().length==0){
      console.log("Error Nombre en Blanco")
      return
  }

  this.lPersonas.sort(function(a, b){return a.run - b.run});

  if (this.lPersonas.find(e => e.run === this.persona_n1.run)) {
      console.log('valor ya existe')
  }

  else {

    this.lPersonas.push(this.persona_n1)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia

    this.persona_n1 = {
      run: this.persona_n1.run,
      nombres: this.persona_n1.nombres,
      apPaterno: this.persona_n1.apPaterno,
      apMaterno: this.persona_n1.apMaterno,
      edad: this.persona_n1.edad,
  
    }
  }
    this.lPersonas.sort(function(a, b){return a.run - b.run});
}  

   // Método que se ejecutará cuando reciba el evento
   agregarPersonaOutput(persona_output:iPersona){
    console.log("Agregando Output",persona_output)
    // Agrega al Arreglo

    this.lPersonas.sort(function(a, b){return a.run - b.run});

    if (this.lPersonas.find(e => e.run === persona_output.run)) {
        console.log('valor ya existe')
    }
  
    else {

    this.lPersonas.push(persona_output)
    // Reinicializamos this.persona_n1
    // De lo contrario causará error por Referencia
    this.persona_n1 = {
      run: this.persona_n1.run,
      nombres: this.persona_n1.nombres,
      apPaterno: this.persona_n1.apPaterno,
      apMaterno: this.persona_n1.apMaterno,
      edad: this.persona_n1.edad,

    }
  }
  this.lPersonas.sort(function(a, b){return a.run - b.run});
  }
}
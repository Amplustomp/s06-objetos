import { Injectable } from "@angular/core";
import { iPersona } from "src/app/c04_modulos/interfaces/iPersona";
// Incorporamos la interface


// Decorador Injectable
@Injectable()
export class PersonaServices{
    //  Colo lo utilizamos para que usted se de cuenta que:
    //  Solo Cuando se invoca (Injecta) por primera vez se carga
    constructor(){
        console.log("Servicio Inicializado ***************************")
    }

    // Al poner private no puedo ver desde los demas
    // Iniciamos el arreglo con dos registros, solo para listar la primera vez
    private _lPersonas_SS:iPersona[]=[
        {nombres:"Sergio",apPaterno:"Cortés",apMaterno:"Pérez",edad:33,run:117}
                        ,{nombres:"Pedro",apMaterno:"Pereira",edad:209,apPaterno:"Pinto",run:10}
    ]


    // Retorna los datos de _lPersonas_SS
    get getPersonas():iPersona[]{
        // Cuidado que javaScript manda los datos por referencia
        // por lo cual el cliente puede realizar cambios
        //     return this._lPersonas_SS;  // <==  Referencia

        // Al coloca 3 puntos
        //     Esto rompre la referencia, envia un objeto nuevo
        return [...this._lPersonas_SS];
        //return this._lPersonas_SS; // ==> Por referencia
    }
    
    
    
    // Recive  un registro del tipo iPersona
    // Agregar una persona al arreglo _lPersonas_SS
    addPersona(persona:iPersona){

        
    this._lPersonas_SS.sort(function(a, b){return a.run - b.run});

    if (this._lPersonas_SS.find(e => e.run === persona.run)) {
        console.log('valor ya existe')
    }
  
    else {
        
        // Agrega al arreglo
        this._lPersonas_SS.push(persona)
        // Solo Imprime el contenido del arreglo, 
        // con el fin de visualizar que no se ha perdido ni uno        
       for (var i = 0; i < this._lPersonas_SS.length; i++) {
            console.log("Persona Arr",this._lPersonas_SS[i])
        }
    }

    this._lPersonas_SS.sort(function(a, b){return a.run - b.run});

    }
}
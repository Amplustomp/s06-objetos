import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaDatosComponent } from './persona/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContadorComponent } from './contador/contador.component';
import { C03PersonaListarComponent } from './ng-form/ng_form.component';
import { C04ModuloModule } from './c04_modulos/c04-modulo.module';


@NgModule({
  declarations: [
    AppComponent,
    PersonaDatosComponent,
    ContadorComponent,
    C03PersonaListarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    C04ModuloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

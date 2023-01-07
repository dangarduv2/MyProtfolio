

import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../app.component';
import { servicioPrintar } from '../servicioPrintar';
import { servicioDecirHola } from '../servicioDecirHola';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent {

  @ViewChild('nombre') nombre:ElementRef;
  @ViewChild('apellido') apellido:ElementRef;

  constructor(public servicioDecirHola:servicioDecirHola){}
  static saludar2 = new EventEmitter<String>();

  @Output() personaAcrear= new EventEmitter<Persona>();
  crearPersona(){
    this.personaAcrear.emit(new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value));
    this.servicioDecirHola.saludar.emit(this.nombre.nativeElement.value);
    CrearPersonaComponent.saludar2.emit(this.nombre.nativeElement.value);
  }
}



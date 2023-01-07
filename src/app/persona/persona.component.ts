import { Component, Input } from '@angular/core';
import { Persona } from '../app.component';
import { CrearPersonaComponent } from '../crear-persona/crear-persona.component';
import { servicioDecirHola } from '../servicioDecirHola';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona:Persona;
  @Input() indice:number;

  constructor(public servicioDecirHola:servicioDecirHola){
    this.servicioDecirHola.saludar.subscribe((nombre:string)=>{console.log("Usuario creado: "+nombre)});
    CrearPersonaComponent.saludar2.subscribe((nombre:string)=>{console.log("Usuario creado2: "+nombre)});
  }
}

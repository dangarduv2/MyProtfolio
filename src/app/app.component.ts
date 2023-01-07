import { Component, OnInit } from '@angular/core';
import { servicioDecirHola } from './servicioDecirHola';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(){
    console.log('Se crea el componente principal usando servicioPrintar.ts');
    this.servicioDecirHola.servicioDecirHola();

  }
  title = 'test';

  arrayPersonas: Persona[] =[new Persona('Jose','Reche'),
          new Persona('Daniel','García'), new Persona('Victor','Pellas')];

   crearPersona(persona:Persona){
   this.arrayPersonas.push(persona);
  }

  constructor(public servicioDecirHola:servicioDecirHola){
    this.servicioDecirHola.saludar.subscribe((nombre:string)=>{alert("Usuario creado: "+nombre)});
  }


}

export class Persona{
  constructor(public nombre:String, public apellido:String){};
}



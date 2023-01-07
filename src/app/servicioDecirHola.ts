import { Injectable, EventEmitter } from '@angular/core';
import { servicioPrintar } from './servicioPrintar';

@Injectable()
export class servicioDecirHola{
  constructor(public servicioPrintar:servicioPrintar){}

  servicioDecirHola(){
    this.servicioPrintar.servicioPrintar('Holaaaa desde servicioSecirHola.ts');
  }

  saludar = new EventEmitter<String>();
}

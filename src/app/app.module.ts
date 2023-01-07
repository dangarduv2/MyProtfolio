import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { servicioPrintar } from './servicioPrintar';
import { servicioDecirHola } from './servicioDecirHola';

@NgModule({
  declarations: [
   PersonaComponent, AppComponent, CrearPersonaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [servicioPrintar, servicioDecirHola],
  bootstrap: [AppComponent]
})
export class AppModule { }

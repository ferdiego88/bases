import { Component } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';
import dataDbz from '../../data/personajes-dbz.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  personajes: Personaje[] = dataDbz.personajesDbz;
  nuevoPersonaje: Personaje = {
    name: '',
    attack: ''
  }


  agregar(){
    if (this.nuevoPersonaje.name?.trim().length === 0) {
      return;
    }
    console.log(this.nuevoPersonaje);
  }





  // Evento no usado
  cambiarNombre(event: any){
    // Ver el valor de la caja de Texto
    //console.log(event.target.value);
  }
}

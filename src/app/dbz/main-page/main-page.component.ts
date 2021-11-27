import { Component } from '@angular/core';
import { Personaje} from '../interfaces/interface-dbz';
import dataDbz from '../../data/personajes-dbz.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  razas = ['Sayayin','Humano/Sayayin','Dios','Humano','Namekiano','Androide'];
  personajes: Personaje[] = dataDbz.personajesDbz.splice(0,2);
  nuevoPersonaje: Personaje = {
    name: '',
    attack: ''
  }


  agregar() {
    if (this.nuevoPersonaje.name?.trim().length === 0) {
      return;
    }
    this.nuevoPersonaje.img = 'assets/images/bulma.png';
    this.personajes.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {};
    console.log(this.personajes);
  }

  // Evento no usado
  cambiarNombre(event: any){
    // Ver el valor de la caja de Texto
    //console.log(event.target.value);
  }
}

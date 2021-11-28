import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  razas = ['Sayayin','Humano/Sayayin','Dios','Humano','Namekiano','Androide'];

   @Input() personajes:Personaje[] = [];
   @Input() nuevoPersonaje:Personaje = {};

  agregar() {
    if (this.nuevoPersonaje.name?.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevoPersonaje);
    this.nuevoPersonaje = {
        name: '',
        attack: '',
        img: 'assets/images/bulma.png',
        race: 'Humano',
        abilities:[],

    }
  }


}

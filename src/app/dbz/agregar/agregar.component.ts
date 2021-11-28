import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  razas = ['Sayayin','Humano/Sayayin','Dios','Humano','Namekiano','Androide'];

   @Input() nuevoPersonaje:Personaje = {};

   @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevoPersonaje.name?.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.limpiarCajas();
  }

  limpiarCajas(){
    this.nuevoPersonaje = {
      name: '',
      attack: '',
      img: 'assets/images/bulma.png',
      race: 'Humano',
      abilities:[],
  }
  }


}

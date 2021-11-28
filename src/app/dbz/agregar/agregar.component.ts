import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  @Input() nuevoPersonaje:Personaje = {};
  razas = ['Sayayin','Humano/Sayayin','Dios','Humano','Namekiano','Androide'];


  constructor(private dbzService: DbzService) {

  }

  agregar() {
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    if (this.nuevoPersonaje.name?.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
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

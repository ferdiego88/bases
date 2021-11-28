import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent   {

  // @Input() personajes: Personaje[] = [];
  constructor(private dbzService: DbzService) {

  }

  get personajes() {
    return this.dbzService.personajes;
  }


}

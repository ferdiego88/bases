import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/interface-dbz';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent   {

  @Input() personajes: Personaje[] = [];

}

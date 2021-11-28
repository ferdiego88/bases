import { Injectable } from '@angular/core';
import dataDbz from '../../data/personajes-dbz.json';
import { Personaje } from '../interfaces/interface-dbz';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _dataPersonajes: Personaje[] = dataDbz.personajesDbz.splice(0,4);
  constructor() {
    console.log('Servicio Inicializado');
   }



   get personajes ():Personaje[] {
     return [...this._dataPersonajes];
   }

   agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }


}

import { Component } from '@angular/core';
import { Personaje} from '../interfaces/interface-dbz';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  nuevoPersonaje: Personaje = {
    name: 'Trunks',
    attack: '45000',
    race: 'Humano/Sayayin',
    abilities:['Transformación en Super Sayayin, Galic Gun,Finish Buster'],
    img: 'assets/images/trunks.png'
  }




  // Evento no usado
  cambiarNombre(event: any){
    // Ver el valor de la caja de Texto
    //console.log(event.target.value);
  }

}

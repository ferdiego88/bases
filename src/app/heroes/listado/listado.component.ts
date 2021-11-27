import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Goku', 'Thor', 'Hulk', 'Capitán América'];
  heroeBorrado = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<div class="box-counter">
  <div>
    <h1>
      {{ titulo}}
    </h1>
  </div>
  <div class="flex-counter">
    <div>
      <button type="button" class="btn btn-primary btn-sm" (click)="operator(+base)">
        <span>Suma + {{base}} </span>
        </button>
    </div>
    <div>
      <span> {{ numero }} </span>
    </div>
    <div>
      <button type="button" class="btn btn-danger btn-sm" (click)="operator(-base)">
        <span>Resta - {{ base }} </span>
      </button>
    </div>
  </div>
</div>
`,
styleUrls: ['./app.contador.scss']
})

export class ContadorComponent {
  titulo = 'Contador App';
  numero = 10;
  base = 5;


  operator(valor: number) {
    this.numero += valor;
  }

}

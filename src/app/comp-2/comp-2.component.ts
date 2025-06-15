import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-2',
  imports: [],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.css',
})
export class Comp2Component {
  tipoUsuario: boolean = true;
  usuarios = [
    {
      id: 0,
      nome: 'Renan',
    },
    {
      id: 1,
      nome: 'Cristiana',
    },
    {
      id: 2,
      nome: 'Apolo',
    },
    {
      id: 3,
      nome: 'Bigode',
    },
  ];

  estadoEspiritual() {
    this.tipoUsuario = !this.tipoUsuario;
  }
}

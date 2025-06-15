import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-6',
  imports: [FormsModule],
  templateUrl: './comp-6.component.html',
  styleUrl: './comp-6.component.css',
})
export class Comp6Component {
  nomeUsuario: string = '';
  idadeUsuario: number | null = null;

  enviarDados(dadoForm: any) {
    console.log(dadoForm.value);
  }
}

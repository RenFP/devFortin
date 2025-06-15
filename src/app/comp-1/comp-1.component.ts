import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-1',
  imports: [FormsModule],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css',
})
export class Comp1Component {
  tituloHeader: string = 'Titutlo A';
  valorInput: string = 'Valor do campo';
  aplicarEstilo: boolean = false;
  styleBinding: string = 'orange';

  atualizarHeader() {
    console.log(this.valorInput);
  }

  atualizarEstitlo() {
    this.styleBinding = "blue"
    this.aplicarEstilo = !this.aplicarEstilo;
  }
}

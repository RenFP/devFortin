import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-3',
  imports: [],
  templateUrl: './comp-3.component.html',
  styleUrl: './comp-3.component.css',
})
export class Comp3Component {
  @Input() armazenandoTituloDoComponentePAI: string = '';

  @Output() textoFilhoEmite = new EventEmitter<string>();

  emitirValor() {
    this.textoFilhoEmite.emit('Texto do Comp Filho')
  }


}

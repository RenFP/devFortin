import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Comp3Component } from './comp-3/comp-3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Comp3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  textoComponentePai: string = 'Texto do componente PAI';

  emitirValorDoFilho(valor: string): void {
    console.log('Valor emitido pelo filho: ' + valor);
  }
}

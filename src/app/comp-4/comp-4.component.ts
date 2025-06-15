import { Component, inject } from '@angular/core';
import { StorageService } from '../Services/storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-4',
  imports: [FormsModule],
  templateUrl: './comp-4.component.html',
  styleUrl: './comp-4.component.css',
})
export class Comp4Component {
  _serviceStorage = inject(StorageService);
  valorInputUser: string = '';

  attUser() {
    this._serviceStorage.atualizarUsuario(this.valorInputUser);
  }
}

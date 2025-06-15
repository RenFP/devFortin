import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  nomeUsuario: string = 'Renan Ferreira';

  atualizarUsuario(nome: string) {
    this.nomeUsuario = nome;
  }
}

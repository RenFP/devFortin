import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-comp-7',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './comp-7.component.html',
  styleUrl: './comp-7.component.css',
})
export class Comp7Component {
  usuarioForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    sobrenome: new FormControl(''),
  });

  enviarDadosForm() {
    console.log(this.usuarioForm.value);
  }
}

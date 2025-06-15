import { Component, inject } from '@angular/core';
import {
  ApiPlaceholderService,
  IPosts,
} from '../Services/api-placeholder.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-5',
  imports: [],
  templateUrl: './comp-5.component.html',
  styleUrl: './comp-5.component.css',
})
export class Comp5Component {
  readonly _apiPlaceHolderService = inject(ApiPlaceholderService);
  postList: IPosts[] = [];

  ngOnInit() {
    this._apiPlaceHolderService.getPosts().subscribe(
      (response) => {
        this.postList = response;
      },
      (err) => {
        console.log('Houve um erro: ', err.message);
      }
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IPosts {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
@Injectable({
  providedIn: 'root',
})
export class ApiPlaceholderService {
  private readonly _httpClient = inject(HttpClient);
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  getPosts(): Observable<IPosts[]> {
    return this._httpClient.get<IPosts[]>(this.apiUrl);
  }
}

import { ApiResponse, Character } from './data.interfaces';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private readonly http: HttpClient) {}

  public getAllCharacters(
    page: number
  ): Observable<ApiResponse<Character[]>> {
    return this.http.get(
      this.apiUrl + `character/?page=${page}`
    );
  }

  public getCharacterById(id: number): Observable<Character> {
    return this.http.get(this.apiUrl + `character/${id}`);
  }
}

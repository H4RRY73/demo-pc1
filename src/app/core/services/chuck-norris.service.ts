import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>('https://api.chucknorris.io/jokes/categories');
  }

  getRandomJoke(category: string): Observable<any> {
    return this.http.get<any>(`https://api.chucknorris.io/jokes/random?category=${category}`);
  }
}

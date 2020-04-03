import { Injectable } from '@angular/core';
import { Category } from '../models/category';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


const apiUrl = 'http://localhost:8000/api/category/saveCat';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Userss')),
        catchError(this.handleError('getUserss', []))
      );
  }
}

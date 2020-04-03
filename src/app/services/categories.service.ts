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

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
   apiUrl = 'https://devs-catalog.herokuapp.com/categories';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) { }

  getCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
      .pipe(
        tap(heroes => console.log('category')),
        catchError(this.handleError('getCatecory', []))
      );
  }


  addCategory(User ): Observable<Category> {
    console.log(User);
    return this.http.post<Category>(this.apiUrl, User, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((Category: Category) => console.log(`added Category w/ id=${Category.id}`)),
      catchError(this.handleError<Category>('addUtilisateur'))
    );
  }
}

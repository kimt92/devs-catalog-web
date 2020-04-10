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
  getCategory(id: number): Observable<Category> {
    console.log( 'Category id', id);
    const url = `${this.apiUrl}/${id}`;
    console.log( 'Category', url);
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`fetched Category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  addCategory(data ): Observable<Category> {
    console.log(data);
    return this.http.post<Category>(this.apiUrl, data, httpOptions).pipe(
      tap((Category: Category) => console.log(`added Category w/ id=${Category.id}`)),
      catchError(this.handleError<Category>('addUtilisateur'))
    );
  }
  updateCategory(id): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, Category, httpOptions).pipe(
      tap(_ => console.log(`updated Utilisateur id=${id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }
  deleteCategory(id): Observable<Category> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

}

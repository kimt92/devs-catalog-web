import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable , of  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Produits } from '../models/produits';

const httpOptions = {
  headers:new HttpHeaders({
    "Content-Type":"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  api_url="https://devs-catalog.herokuapp.com/products"
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error); // log to console instead
      return of(result as T);
    }; 
  }
  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(this.api_url)
      .pipe(
        tap(heroes => console.log('fetched produit')),
        catchError(this.handleError('getProduits', []))
      );
  }
  getProduit(id: number): Observable<Produits> {
    console.log( 'Produits id', id);
    const url = `${this.api_url}${id}`;
    console.log( 'Produits', url);
    return this.http.get<Produits>(url).pipe(
      tap(_ => console.log(`fetched Produits id=${id}`)),
      catchError(this.handleError<Produits>(`getProduits id=${id}`))
    );
  }
  addProduit(data ): Observable<Produits> {
    console.log(data);
    return this.http.post<Produits>(this.api_url, data, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((Produits: Produits) => console.log(`added Produit w/ id=${Produits.id}`)),
      catchError(this.handleError<Produits>('addProduit'))
    );
  }
  updateCategory(id): Observable<any> {
    const url = `${this.api_url}/${id}`;
    return this.http.put(url, Produits, httpOptions).pipe(
      tap(_ => console.log(`updated Utilisateur id=${id}`)),
      catchError(this.handleError<any>('updateProduits'))
    );
  }
  deleteProduits(id): Observable<Produits> {
    const url = `${this.api_url}${id}`;
    return this.http.delete<Produits>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Produits id=${id}`)),
      catchError(this.handleError<Produits>('deleteProduits'))
    );
  }


}

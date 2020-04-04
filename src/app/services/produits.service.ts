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
  addProduit(data ): Observable<Produits> {
    console.log(data);
    return this.http.post<Produits>(this.api_url, data, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((Produits: Produits) => console.log(`added Produit w/ id=${Produits.id}`)),
      catchError(this.handleError<Produits>('addProduit'))
    );
  }


}

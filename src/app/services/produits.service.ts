import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable , of  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Produits } from '../models/produits';
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  api_url="http://localhost:8000/api/produits/saveProd"
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

}

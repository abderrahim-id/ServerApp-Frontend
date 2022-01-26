import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
// import { tap, throwError } from 'rxjs/operators';
import { CustomResponse } from '../interface/custom-response';

@Injectable({ providedIn: 'root' })
export class ServerService {

  private readonly apiUrl = "any ";

  // we can use this client to recal to the backend so we can retrieve data from the server
  // and then map this data to our application state
  constructor(private http: HttpClient) { }

  // Methods
  servers$ = <Observable<CustomResponse>>
   this.http.get<CustomResponse>(`${this.apiUrl}/server/list`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  // the $ sign means that this is an observable
  // the normal way to do this is to use the next method
  /*
  getServers(): Observable<CustomResponse> {
     return this.http.get<CustomResponse>(`http://localhost:8080/server/list`); }
   */

  handleError(handleError: any): Observable<never> {
   return  throwError  ('Method not implemented.'); 
  }
}

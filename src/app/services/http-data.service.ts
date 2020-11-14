import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Appointment} from '../model/appointment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  // Appointment Endpoint
  basePath = 'http://localhost:3000/appointments';
  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  // API Error Handling
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  // Create Appointment
  createItem(item): Observable<Appointment> {
    return this.http.post<Appointment>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Appointment by Id
  getItem(id): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Appointment Data
  getList(): Observable<Appointment>{
    return this.http.get<Appointment>(this.basePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Appointment
  updateItem(id, item): Observable<Appointment>{
    return this.http.put<Appointment>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Appointment
  deleteItem(id): Observable<any> {
    return this.http.delete<Appointment>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

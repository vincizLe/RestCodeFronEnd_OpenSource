import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Appointment} from '../model/appointment';
import {catchError, retry} from 'rxjs/operators';
import {Product} from '../model/product';
import {LoginOwner} from '../model/login-owner';
import {LoginConsultant} from '../model/login-consultant';
import {Owner} from "../model/owner";
import {Consultant} from "../model/consultant";

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  // Appointment Endpoint
  basePath = 'https://cors-anywhere.herokuapp.com/https://protected-hollows-40842.herokuapp.com/api';
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
  // Get All Owners for login
  getListOwners_Login(): Observable<LoginOwner[]>{
    return this.http.get<LoginOwner[]>(`https://restcodewebapplication.azurewebsites.net/api/owners`);
  }
  // Get All Consultants for login
  getListConsultants_Login(): Observable<LoginConsultant[]>{
    return this.http.get<LoginConsultant[]>(`https://restcodewebapplication.azurewebsites.net/api/consultants`);
  }
  // Create Owner
  createNewOwner(item): Observable<Owner> {
    return this.http.post<Owner>(`${this.basePath}/plans/1/owners`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Create Consultant
  createNewConsultant(item): Observable<Consultant> {
    return this.http.post<Consultant>(`${this.basePath}/plans/2/consultants`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
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
    return this.http.get<Appointment>(`${this.basePath}/owners/1/appointments`)
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
  // Create Product
  createItemP(item): Observable<Product> {
    return this.http.post<Product>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Product by Id
  getItemP(id): Observable<Product> {
    return this.http.get<Product>(`${this.basePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Product Data
  getListP(): Observable<Product>{
    return this.http.get<Product>(`${this.basePath}/restaurants/1/products`)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Product
  updateItemP(id, item): Observable<Product>{
    return this.http.put<Product>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Product
  deleteItemP(id): Observable<any> {
    return this.http.delete<Product>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

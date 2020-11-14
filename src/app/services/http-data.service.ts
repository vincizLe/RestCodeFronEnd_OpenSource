import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Sale} from '../models/sale';
import {SaleDetail} from '../models/sale-detail';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  // Sales Endpoint
  salePath = 'http://localhost:3000/api/sales';
  saleDetailsPath = 'http://localhost:3000/api/sale-details';
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
  // SALES
  // Create Sale
  createSale(item): Observable<Sale> {
    return this.http.post<Sale>(this.salePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sale by Id
  getSale(id): Observable<Sale> {
    return this.http.get<Sale>(`${this.salePath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sale Data
  getSaleList(): Observable<Sale>{
    return this.http.get<Sale>(this.salePath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Sale
  updateSale(id, item): Observable<Sale>{
    return this.http.put<Sale>(`${this.salePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Sale
  deleteSale(id): Observable<any> {
    return this.http.delete<Sale>(`${this.salePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // SALES DETAILS
  // Create Sale Detail
  createSaleDetail(item): Observable<SaleDetail> {
    return this.http.post<SaleDetail>(this.saleDetailsPath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sale Detail by Id
  getSaleDetail(id): Observable<SaleDetail> {
    return this.http.get<SaleDetail>(`${this.saleDetailsPath}/${id}`, this.httpOptions )
      .pipe(retry(2), catchError(this.handleError));
  }
  // Get Sale Detail Data
  getSaleDetailList(): Observable<SaleDetail>{
    return this.http.get<SaleDetail>(this.saleDetailsPath)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Update Sale Detail
  updateSaleDetail(id, item): Observable<SaleDetail>{
    return this.http.put<SaleDetail>(`${this.saleDetailsPath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // Delete Sale Detail
  deleteSaleDetail(id): Observable<any> {
    return this.http.delete<SaleDetail>(`${this.saleDetailsPath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

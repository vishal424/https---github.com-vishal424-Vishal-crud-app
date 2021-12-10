import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Product } from './product';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  private apiURL = "https://jsonplaceholder.typicode.com";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/post/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(product): Observable<Product[]> {
    return this.httpClient.post<Product[]>(this.apiURL + '/product/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  // create(product :Product): Observable<Product> {
  //   return this.httpClient.post<Product>
  //   (this.apiURL + '/products/', product, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }  

  // createEmployee(employee: Employee): Observable<Employee> {  
  //   
  //   return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
  //   employee, httpOptions);  
  // }  
   

  find(id): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<Product[]> {
    return this.httpClient.put<Product[]>(this.apiURL + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Product[]>(this.apiURL + '/products/' + id, this.httpOptions)
    .pipe(
           catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
function catchError(errorHandler: (error: any) => any): import("rxjs").OperatorFunction<Product[], Product[]> {
  throw new Error('Function not implemented.');
}

function product(product: any): any {
  throw new Error('Function not implemented.');
}


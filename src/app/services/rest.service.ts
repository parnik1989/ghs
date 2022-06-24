import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ResponseData } from '../types/DataType';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseurl='http://localhost:8080';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  PostData(data: any,url: any): Observable<any> {
    console.log(data);
    let requestData = JSON.stringify(data);
    console.log(requestData);
    return this.http.post<any>(this.baseurl+url,requestData,this.httpOptions ).pipe();
  }

  GetData(url: string): Observable<any> {
     return this.http.get(this.baseurl+url, { observe: 'response' });
  }

  errorHandle(error: Error) {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.name} \n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}

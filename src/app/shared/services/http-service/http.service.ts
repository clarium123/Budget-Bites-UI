import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment as env} from '@budget-bites/env'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = '';

  constructor(private http: HttpClient) {
    this.baseUrl = env.apiUrl;
  }

  get(apiRoute: string): Observable<any> {
    return this.http.get<unknown>(`${this.baseUrl}/${apiRoute}`);
  }

  post(apiRoute: string, payload?: any,isHeaders?: boolean): Observable<any> {
    if(isHeaders === true){
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
    }); 
     return this.http.post<unknown>(`${this.baseUrl}/${apiRoute}`, payload,{ headers: headers });
    }else{
      return this.http.post<unknown>(`${this.baseUrl}/${apiRoute}`, payload);
    }
  }

  put(apiRoute: string, payload?: any): Observable<any> {
    return this.http.put<unknown>(`${this.baseUrl}/${apiRoute}`, payload);
  }

  delete(apiRoute: string, _this?: any): Observable<any> {
    _this = _this?? this;
    _this.baseUrl = _this.apiUrl?? this.baseUrl;
    return this.http.delete<unknown>(`${_this.baseUrl}/${apiRoute}`);
  }

  deleteUsingPayload(apiRoute: string, payload: any): Observable<any> {
    return  this.http.delete<unknown>(`${this.baseUrl}/${apiRoute}`, {body: payload});
  }

  patch(apiRoute: string, payload?: unknown): Observable<any> {
    return this.http.patch<unknown>(`${this.baseUrl}/${apiRoute}`, payload);
  }

  getMockData(filePath: string): Observable<any> {
    return this.http.get<unknown>(`${filePath}`);
  }
}

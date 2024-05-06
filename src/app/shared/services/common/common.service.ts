import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Info, Success, Warning } from '@budget-bites/shared/utilites/config/snackbar-config';
import { Observable } from 'rxjs';
import {environment as env} from '@budget-bites/env'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl: string = '';
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {
    this.baseUrl = env.llmApiUrl;
   }

  /**
   * successSnackBar Function is used to display SnackBar for Success Message
   * @param message
   */
  successSnackBar(message: string) {
    this.snackBar.open(message, '', Success);
  }
  
  /**
   * infoSnackBar Function is used to display SnackBar for Information Message
   * @param message
   */
  infoSnackBar(message: string) {
    this.snackBar.open(message, '', Info);
  }
  
  /**
   * warningSnackBar Function is used to diaplay SnackBar for Warning Message
   * @param message
   */
  warningSnackBar(message: string) {
    this.snackBar.open(message, '', Warning);
  }

  post(apiRoute: string, payload?: any,isHeaders?: boolean): Observable<any> {
    if(isHeaders === true){
      const headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
    }); 
     return this.httpClient.post<any>(`${this.baseUrl}/${apiRoute}`, payload,{ headers: headers });
    }else{
      return this.httpClient.post<any>(`${this.baseUrl}/${apiRoute}`, payload);
    }
  }

  get(apiRoute: string): Observable<any> {
    return this.httpClient.get<unknown>(`${this.baseUrl}/${apiRoute}`);
  }


}

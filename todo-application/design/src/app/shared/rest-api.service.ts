import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SlotMachineRoll } from '../data/slot-machine-roll';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  url = "https://localhost:7118/SlotMachine/roll/";

  constructor(private http: HttpClient) { }

  httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });
  
  public getSlotMachineRoll(credits : string): Observable<any> {

    return this.http.get<any>(this.url + credits,  { headers: {'Access-Control-Allow-Origin':'*'} })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser, IUserPreference } from './user';


// C:\Users\vishal\Vishal-crud-app\src\user.ts
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private userUrl = 'https://localhost:44380/api/';
  constructor(private http: HttpClient) { }
  saveUser(payload: IUser): Observable<IUser> {
    {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.post<IUser>(this.userUrl + 'user', payload, httpOptions)
        .pipe(
          tap((user: IUser) => console.log(`added user is=${user.name}`)),
          catchError(this.handleError<IUser>('add user'))
        );
    }
  }



  saveUserPreference(payload: IUserPreference): Observable<IUserPreference> {
    {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.post<IUserPreference>(this.userUrl+'userpreference', payload, httpOptions)
        .pipe(
          tap((user: IUserPreference) => console.log(`added user preference is=${user.name}`)),
          catchError(this.handleError<IUserPreference>('add user preference Error'))
        );
    }
  }

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

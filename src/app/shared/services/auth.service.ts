import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

export interface AuthResponseData {
  id: string;
  name: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mode = new BehaviorSubject<string>('signin');

  constructor(
    private http: HttpClient
  ) { }

  changeMode(mode: string) {
    this.mode.next(mode);
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://localhost:3000/api/users',
      {
        name,
        email,
        password
      }
    ).pipe(catchError(this.handleError));
  }

  signin(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://localhost:3000/api/auth',
      {
        email,
        password
      }
    ).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An error has occured!';
    if (!errorResponse.error) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error;
    return throwError(errorMessage);
  }
}

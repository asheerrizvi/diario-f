import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

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
    return this.http.post<any>(
      'http://localhost:3000/api/users',
      {
        name,
        email,
        password
      }
    );
  }

  signin(email: string, password: string) {
    console.log()
    return this.http.post<string>(
      'http://localhost:3000/api/auth',
      {
        email,
        password
      }
    );
  }

  // login(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
  //     {
  //         email,
  //         password,
  //         returnSecureToken: true
  //     }
  //   ).pipe(catchError(this.handleError), tap(resData => {
  //       this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
  //   }));
  // }

  // private handleError(errorRes: HttpErrorResponse) {
  //   let errorMessage = 'An unknown error occured!';
  //   if (!errorRes.error || !errorRes.error.error ) {
  //     return throwError(errorMessage);
  //   }
  //   switch (errorRes.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'This email already exists!';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'Check your username or password';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'Check your username or password';
  //       break;
  //   }
  //   return throwError(errorMessage);
  // }
}

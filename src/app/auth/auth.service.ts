import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    authMode = 'sign-in';
    authModeSubject = new BehaviorSubject<string>(this.authMode);

    changeMode() {
        if (this.authMode === 'sign-in') {
            this.authMode = 'sign-up';
        } else {
            this.authMode = 'sign-in';
        }
        this.authModeSubject.next(this.authMode);
    }
}

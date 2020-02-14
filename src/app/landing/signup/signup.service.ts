import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  mode = new BehaviorSubject<string>('signin');
  // mode = 'signin';

  constructor() { }

  changeMode(mode: string) {
    this.mode.next(mode);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private mode = new BehaviorSubject<string>('signin');

  constructor() { }

  changeMode(mode: string) {
    this.mode.next(mode);
  }
}

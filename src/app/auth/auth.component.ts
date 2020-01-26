import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  authMode = 'sign-in';
  private authModeSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authModeSubscription = this.authService.authModeSubject.subscribe(
      authMode => {
        this.authMode = authMode;
      }
    );
  }

  ngOnDestroy() {
    this.authService.changeMode();
    this.authModeSubscription.unsubscribe();
  }
}

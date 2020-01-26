import { Component, OnInit } from '@angular/core';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSignUp() {
    this.authService.changeMode();
  }

}

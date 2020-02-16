import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  signinForm: FormGroup;
  showNotification = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }
  
  onSignin() {
    if (!(this.signinForm.get('email').valid || this.signinForm.get('password').valid)) {
      this.showNotification = true;
    } else {
      this.authService.signin(this.signinForm.value.email, this.signinForm.value.password);
    }

    this.signinForm.reset();
  }

  closeNotification() {
    this.showNotification = false;
  }

  ngOnDestroy() {
    this.authService.changeMode('signup');
  }
}

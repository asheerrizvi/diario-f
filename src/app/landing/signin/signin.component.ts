import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupService } from '../signup/signup.service';
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
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }
  
  onSignin() {
    console.log(this.signinForm);
    if (!(this.signinForm.get('email').valid || this.signinForm.get('password').valid)) {
      this.showNotification = true;
    }
  }

  closeNotification() {
    this.showNotification = false;
  }

  ngOnDestroy() {
    this.signupService.changeMode('signup');
  }
}

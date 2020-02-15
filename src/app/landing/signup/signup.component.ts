import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupService } from './signup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  showNotification = false;

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.signupService.changeMode('signup');
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    console.log(this.signupForm);
    if (!(this.signupForm.get('email').valid || this.signupForm.get('password').valid)) {
      this.showNotification = true;
    }
  }

  closeNotification() {
    this.showNotification = false;
  }

  ngOnDestroy() {
    this.signupService.changeMode('signin');
  }
}

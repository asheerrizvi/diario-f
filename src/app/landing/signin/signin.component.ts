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
  isLoading = false;
  error: string = null;

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
    if (!( this.signinForm.get('email').valid || this.signinForm.get('password').valid)) {
      this.showNotification = true;
      return;
    }
    const email = this.signinForm.value.email;
    const password = this.signinForm.value.password;
    this.isLoading = true;
      
    this.authService.signin(email, password).subscribe(response => {
      console.log(response);
      this.isLoading = false;
    }, (errorMessage) => {
      this.isLoading = false;
      this.error = errorMessage;
      this.showNotification = true;
    });

    this.signinForm.reset();
  }

  closeNotification() {
    this.showNotification = false;
  }

  ngOnDestroy() {
    this.authService.changeMode('signup');
  }
}

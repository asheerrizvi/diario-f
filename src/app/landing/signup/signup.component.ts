import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.changeMode('signup');
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    if (!( this.signupForm.get('name').valid || this.signupForm.get('email').valid || this.signupForm.get('password').valid)) {
      this.showNotification = true;
      return;
    }
    const name = this.signupForm.value.name;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
      
    this.authService.signup(name, email, password).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    });

    this.signupForm.reset();
  }

  closeNotification() {
    this.showNotification = false;
  }

  ngOnDestroy() {
    this.authService.changeMode('signin');
  }
}

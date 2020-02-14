import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupService } from '../signup/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.signupService.changeMode('signup');
  }
}

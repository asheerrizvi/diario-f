import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.signupService.changeMode('signup');
  }

  ngOnDestroy() {
    this.signupService.changeMode('signin');
  }
}

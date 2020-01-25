import { Component, OnInit } from '@angular/core';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  signUp =  new Subject<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.signUp.next('signup');
  }

}

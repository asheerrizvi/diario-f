import { Component, OnInit } from '@angular/core';

import { faEnvelope, faLock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faTimes = faTimes;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

}

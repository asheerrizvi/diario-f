import { Component, OnInit } from '@angular/core';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor() { }

  ngOnInit() {
  }

}

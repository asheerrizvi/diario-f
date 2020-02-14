import { Component, OnInit, OnDestroy } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { SignupService } from '../landing/signup/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faGithub = faGithub;
  mode: string;

  constructor(
    private router: Router,
    private signupService: SignupService
  ) { }

  ngOnInit() {
    this.signupService.mode.subscribe(
      mode => {
        this.mode = mode;
      }
    );
  }

  onSignup() {
    this.mode = 'signup';
    this.signupService.changeMode('signup');
    this.router.navigate(['signup']);
  }
}

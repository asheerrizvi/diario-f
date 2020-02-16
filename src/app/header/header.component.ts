import { Component, OnInit, OnDestroy } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.mode.subscribe(
      mode => {
        this.mode = mode;
      }
    );
  }

  onSignup() {
    this.mode = 'signup';
    this.authService.changeMode('signup');
    this.router.navigate(['signup']);
  }
}

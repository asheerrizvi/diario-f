import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { faSignOutAlt, faUser, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isAuthenticated = false;
  private modeSubscription: Subscription;
  private userSubscription: Subscription;

  @ViewChild('dropdown', {static: false}) dropdown: ElementRef;

  faSignOutAlt = faSignOutAlt;
  faUser = faUser;
  faEdit = faEdit;
  mode: string;
  dropdownOpen = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.modeSubscription = this.authService.mode.subscribe(
      mode => {
        this.mode = mode;
      }
    );

    this.userSubscription = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
        if (user !== null) {
          this.authService.changeMode('authenticated');
        }
      }
    );
  }

  onSignup() {
    this.authService.changeMode('signup');
    this.router.navigate(['signup']);
  }

  onLogout() {
    this.authService.logout();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdown.nativeElement.classList.toggle('is-active');
  }

  closeDropdown() {
    if (this.dropdownOpen) {
      this.toggleDropdown();
    }
  }

  ngOnDestroy() {
    this.modeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}

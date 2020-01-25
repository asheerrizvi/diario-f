import { Component, OnInit } from '@angular/core';

import { faChevronRight, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faChevronRight = faChevronRight;
  faArrowCircleRight = faArrowCircleRight;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onContinue() {
    this.router.navigate(['/auth']);
  }
}

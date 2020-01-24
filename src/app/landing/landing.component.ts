import { Component, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faChevronRight = faChevronRight;

  constructor() { }

  ngOnInit() {
  }

}

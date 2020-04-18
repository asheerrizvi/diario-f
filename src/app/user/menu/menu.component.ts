import { Component, OnInit } from '@angular/core';

import {
  faLayerGroup,
  faQuoteLeft,
  faCalendarCheck,
  faUser,
  faSignOutAlt,
  faBook,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  faQuoteLeft = faQuoteLeft;
  faCalendarCheck = faCalendarCheck;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faBook = faBook;
  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

}

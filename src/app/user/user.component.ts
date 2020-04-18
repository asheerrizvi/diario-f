import { Component, OnInit } from '@angular/core';

import {
  faLayerGroup,
  faQuoteLeft,
  faCalendarCheck,
  faUser,
  faSignOutAlt,
  faBook,
  faSearch,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  faQuoteLeft = faQuoteLeft;
  faCalendarCheck = faCalendarCheck;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faBook = faBook;
  faSearch = faSearch;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() {}

  ngOnInit() {}
}

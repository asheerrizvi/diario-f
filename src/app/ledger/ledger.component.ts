import { Component, OnInit } from '@angular/core';

import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  faPlus = faPlus;
  faSearch = faSearch;

  options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  currentDate;

  constructor() { }

  ngOnInit() {
    this.currentDate =  new Date().toLocaleTimeString('en-us', this.options).split(',').splice(0, 3);
  }

}

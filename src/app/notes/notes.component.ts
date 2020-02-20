import { Component, OnInit } from '@angular/core';

import { faPlus, faSearch, faFilter, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  faPlus = faPlus;
  faSearch = faSearch;
  faFile = faFile;
  faFilter = faFilter;

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

import { Component, OnInit } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  faPlus = faPlus;
  localeString = 'en';
  viewDate: any;

  now = moment().format('MMM Do, YYYY');

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    moment.locale(this.localeString);
    this.viewDate = moment();
    this.weatherService.getWeather().subscribe(response => {
      console.log(response);
    });
  }
}

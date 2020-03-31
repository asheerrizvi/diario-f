import { Component, OnInit, OnDestroy } from '@angular/core';

import { faLayerGroup, faQuoteLeft, faCalendarCheck, faUser, faSignOutAlt, faBook, faSearch } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  faQuoteLeft = faQuoteLeft;
  faCalendarCheck = faCalendarCheck;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faBook = faBook;
  faSearch = faSearch;

  localeString = 'en';
  viewDate: any;
  subscription: Subscription;
  temperature: number;
  description: string;
  location: string;
  icon: string;

  month = moment().format('MMM');
  day = moment().format('D');
  year = moment().format('YYYY');

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    moment.locale(this.localeString);
    this.viewDate = moment();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        this.weatherService.getWeatherInfo(lat, lon).subscribe(
          weatherData => {
            this.temperature = Math.round(weatherData.main.temp - 273.5);
            this.description = weatherData.weather[0].main;
            this.location = weatherData.name;
          }
        );
      });
    }
  }
}

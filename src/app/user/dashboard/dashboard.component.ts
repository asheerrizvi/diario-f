import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import * as moment from 'moment';
import { WeatherService } from '../weather.service';

import {
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;

  localeString = 'en';
  viewDate: any;
  subscription: Subscription;
  temperature: number;
  description: string;
  city: string;
  country: string;

  weekday = moment().format('dddd');
  day = moment().format('D');
  month = moment().format('MMM');
  year = moment().format('YYYY');

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    moment.locale(this.localeString);
    this.viewDate = moment();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        this.weatherService
          .getWeatherInfo(lat, lon)
          .subscribe((weatherData) => {
            this.temperature = Math.round(weatherData.main.temp - 273.5);
            this.description = weatherData.weather[0].main;
            this.city = weatherData.name;
            this.country = weatherData.sys.country;
          });
      });
    }
  }
}

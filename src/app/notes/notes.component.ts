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
import * as moment from 'moment';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  faLayerGroup = faLayerGroup;
  faQuoteLeft = faQuoteLeft;
  faCalendarCheck = faCalendarCheck;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faBook = faBook;
  faSearch = faSearch;
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

  imageIndex = 0;
  images = [
    'https://naver.github.io/egjs-flicking/images/bg01.jpg',
    'https://naver.github.io/egjs-flicking/images/bg02.jpg',
    'https://naver.github.io/egjs-flicking/images/bg03.jpg',
  ];

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

  changeSlide(n) {
    const changedIndex = this.imageIndex + n;

    if (changedIndex < 0) {
      this.imageIndex = this.images.length - 1;
    } else if (changedIndex > this.images.length - 1) {
      this.imageIndex = 0;
    } else {
      this.imageIndex = changedIndex;
    }
  }

  currentSlide(n) {
    this.imageIndex = n;
  }
}

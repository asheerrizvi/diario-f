import { Component, OnInit, OnDestroy } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  localeString = 'en';
  viewDate: any;
  subscription: Subscription;
  temperature: number;
  description: string;
  location: string;
  icon: string;

  now = moment().format('MMM Do, YYYY');

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    moment.locale(this.localeString);
    this.viewDate = moment();

    this.subscription = this.weatherService.weatherChanged.subscribe(
      weatherData => {
        this.temperature = Math.round(weatherData.main.temp - 273.5);
        this.description = weatherData.weather[0].main;
        this.location = weatherData.name;
        this.icon = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

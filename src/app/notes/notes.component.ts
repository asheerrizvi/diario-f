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

  now = moment().format('MMM Do, YYYY');

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    moment.locale(this.localeString);
    this.viewDate = moment();

    this.subscription = this.weatherService.weatherChanged.subscribe(
      weatherData => {
        console.log(weatherData.weather[0], weatherData.name);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

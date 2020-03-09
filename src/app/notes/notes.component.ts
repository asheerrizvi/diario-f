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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        console.log(`Latitude: ${lat}, Longitude: ${lon}`);

        this.weatherService.getWeatherInfo(lat, lon).subscribe(response => {
          console.log(response);
        });
      });
    }
  }
}

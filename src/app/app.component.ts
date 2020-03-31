import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { WeatherService } from './notes/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'diario-f';

  constructor(
    private authService: AuthService,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}

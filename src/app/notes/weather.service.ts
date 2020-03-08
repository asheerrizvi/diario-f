import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<any>(
      'http://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=50344b9b49d65c68cf010286629ece4c'
    ).pipe(tap(res => {
      console.log(res);
    }));
  }
}

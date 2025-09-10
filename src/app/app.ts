import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { CurrentWeatherComponent } from './components/current-weather/current-weather';
import { WeatherDetailsComponent } from './components/weather-details/weather-details';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBarComponent,
    CurrentWeatherComponent,
    WeatherDetailsComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
  ],
  template: `
    <div class="min-h-screen bg-blue-900">
      <div class="max-w-2xl mx-auto">
        <app-search-bar />
        <app-current-weather />
        <app-weather-details />
        <app-daily-forecast />
        <app-hourly-forecast />
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {}

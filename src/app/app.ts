import { Component } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar';
import { CurrentWeatherComponent } from './components/current-weather/current-weather';
import { WeatherDetailsComponent } from './components/weather-details/weather-details';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast';
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SearchBarComponent,
    CurrentWeatherComponent,
    WeatherDetailsComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
    HeaderComponent
  ],
  template: `
    <div class="min-h-screen bg-neutral-900">
      <div class="max-w-2xl mx-auto">
        <app-header />
        <h1 class="font-bricolage font-bold text-5xl text-white text-center mx-9 my-8">How's the sky looking today?</h1>
        <app-search-bar />
        <app-current-weather />
        <app-weather-details />
        <app-daily-forecast />
        <app-hourly-forecast />
      </div>
    </div>
  `,
  // templateUrl: './app-component.html',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {}

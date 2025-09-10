import { Component } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  standalone: true,
  template: `
    <div class="p-4">
      <h2 class="text-xl text-white mb-4">Hourly forecast</h2>
      <div class="space-y-4">
        @for (hour of hours; track hour.time) {
          <div class="flex items-center justify-between bg-blue-950 rounded-lg p-3">
            <span class="text-gray-400 w-20">{{ hour.time }}</span>
            <img
              [src]="hour.icon"
              [alt]="hour.weather"
              class="w-8 h-8"
            />
            <span class="text-white w-20 text-right">{{ hour.temp }}°</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HourlyForecastComponent {
  hours = [
    { time: '3 PM', temp: 20, weather: 'Cloudy', icon: 'assets/images/icon-overcast.webp' },
    { time: '4 PM', temp: 20, weather: 'Partly Cloudy', icon: 'assets/images/icon-partly-cloudy.webp' },
    { time: '5 PM', temp: 20, weather: 'Sunny', icon: 'assets/images/icon-sunny.webp' },
    { time: '6 PM', temp: 19, weather: 'Cloudy', icon: 'assets/images/icon-overcast.webp' },
    { time: '7 PM', temp: 18, weather: 'Cloudy', icon: 'assets/images/icon-overcast.webp' },
    { time: '8 PM', temp: 18, weather: 'Fog', icon: 'assets/images/icon-fog.webp' },
    { time: '9 PM', temp: 17, weather: 'Cloudy', icon: 'assets/images/icon-overcast.webp' },
    { time: '10 PM', temp: 17, weather: 'Cloudy', icon: 'assets/images/icon-overcast.webp' },
  ];
}
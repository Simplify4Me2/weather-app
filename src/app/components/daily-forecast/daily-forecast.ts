import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  standalone: true,
  template: `
    <div class="p-4">
      <h2 class="text-xl text-white mb-4">Daily forecast</h2>
      <div class="grid grid-cols-7 gap-2">
        @for (day of days; track day.date) {
          <div class="text-center">
            <p class="text-gray-400">{{ day.name }}</p>
            <img
              [src]="day.icon"
              [alt]="day.weather"
              class="w-8 h-8 mx-auto my-2"
            />
            <p class="text-white">{{ day.high }}°</p>
            <p class="text-gray-400">{{ day.low }}°</p>
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
export class DailyForecastComponent {
  days = [
    { name: 'Tue', date: '2025-08-05', high: 20, low: 14, weather: 'Sunny', icon: 'assets/images/icon-sunny.webp' },
    { name: 'Wed', date: '2025-08-06', high: 21, low: 15, weather: 'Partly Cloudy', icon: 'assets/images/icon-partly-cloudy.webp' },
    { name: 'Thu', date: '2025-08-07', high: 24, low: 14, weather: 'Sunny', icon: 'assets/images/icon-sunny.webp' },
    { name: 'Fri', date: '2025-08-08', high: 25, low: 13, weather: 'Partly Cloudy', icon: 'assets/images/icon-partly-cloudy.webp' },
    { name: 'Sat', date: '2025-08-09', high: 21, low: 15, weather: 'Rain', icon: 'assets/images/icon-rain.webp' },
    { name: 'Sun', date: '2025-08-10', high: 25, low: 16, weather: 'Sunny', icon: 'assets/images/icon-sunny.webp' },
    { name: 'Mon', date: '2025-08-11', high: 24, low: 15, weather: 'Sunny', icon: 'assets/images/icon-sunny.webp' },
  ];
}
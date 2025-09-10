import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  template: `
    <div class="grid grid-cols-2 gap-4 p-4">
      <div class="bg-blue-950 rounded-lg p-4">
        <p class="text-gray-400">Feels Like</p>
        <p class="text-2xl text-white">18°</p>
      </div>
      <div class="bg-blue-950 rounded-lg p-4">
        <p class="text-gray-400">Humidity</p>
        <p class="text-2xl text-white">46%</p>
      </div>
      <div class="bg-blue-950 rounded-lg p-4">
        <p class="text-gray-400">Wind</p>
        <p class="text-2xl text-white">14 km/h</p>
      </div>
      <div class="bg-blue-950 rounded-lg p-4">
        <p class="text-gray-400">Precipitation</p>
        <p class="text-2xl text-white">0 mm</p>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class WeatherDetailsComponent {}
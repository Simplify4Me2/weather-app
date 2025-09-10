import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="p-4 text-white">
      <h1 class="text-3xl font-bold mb-2">Berlin, Germany</h1>
      <p class="text-lg text-gray-300 mb-4">{{ today | date:'EEEE, MMM d, y' }}</p>
      <div class="flex items-end gap-4">
        <div class="text-7xl font-light">20°</div>
        <img
          src="assets/images/icon-sunny.webp"
          alt="Sunny"
          class="w-16 h-16"
        />
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CurrentWeatherComponent {
  today = new Date();
}
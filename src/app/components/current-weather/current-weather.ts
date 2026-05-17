import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [DatePipe],
  template: `
    <div class="flex flex-col items-center m-4 p-10 h-72 rounded-2xl text-white bg-[url('assets/images/bg-today-small.svg')]">
      <h1 class="text-3xl font-bold font-dm mb-2">Berlin, Germany</h1>
      <p class="text-lg font-dm text-gray-300 mb-4">{{ today | date:'EEEE, MMM d, y' }}</p>
      <div class="flex items-center">
        <img
        src="assets/images/icon-sunny.webp"
        alt="Sunny"
        class="w-32 h-32"
        />
        <div class="text-8xl font-bricolage font-bold italic">20°</div>
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
  today = new Date(2025, 7, 5);
}
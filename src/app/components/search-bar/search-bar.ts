import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="flex items-center justify-between p-4">
      <div class="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search for a place..."
          class="w-full px-4 py-2 pl-10 rounded-lg bg-blue-950 text-white placeholder-gray-400"
        />
        <img
          ngSrc="assets/images/icon-search.svg"
          width="20"
          height="20"
          alt="Search"
          class="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <button class="ml-4 p-2 rounded-lg bg-blue-950">
        <img
          ngSrc="assets/images/icon-units.svg"
          width="24"
          height="24"
          alt="Toggle units"
        />
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SearchBarComponent {}
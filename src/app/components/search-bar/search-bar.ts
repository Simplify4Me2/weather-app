import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="flex flex-col  p-4">
      <div class="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search for a place..."
          class="w-full px-4 pl-15 rounded-lg bg-neutral-800 h-14 font-dm text-white text-xl placeholder-neutral-200"
        />
        <img
          ngSrc="assets/images/icon-search.svg"
          width="20"
          height="20"
          alt="Search"
          class="absolute left-6 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <button class="p-2 mt-3 h-14 rounded-lg bg-blue-500 text-xl font-dm text-neutral-0">
        Search
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
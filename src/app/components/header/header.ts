import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    template: `
    <header class="flex flex-row p-4">
        <img src="assets/images/logo.svg" alt="Weather App Logo" class="h-7 mt-1">
        <button class="flex flex-row items-center ml-auto px-2 rounded-lg bg-neutral-800">
            <img src="assets/images/icon-units.svg" alt="Units">
            <span class="text-white text-sm mx-1 font-dm">Units</span>
            <img src="assets/images/icon-dropdown.svg" alt="Dropdown">
        </button>
    </header>
  `,
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
}
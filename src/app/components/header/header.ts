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
        <!-- <div class="relative inline-block text-left">
            <div>
                <button type="button" class="inline-flex justify-center w-full rounded-md border bg-black border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
                    Units
                    <img src="assets/images/icon-units.svg" alt="Units" class="w-5 h-5 ml-2">
                </button>
            </div>
           
        </div> -->
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
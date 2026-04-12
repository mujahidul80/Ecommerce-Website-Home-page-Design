import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-promo-banner',
  imports: [MatIconModule],
  template: `
    <div class="container py-12">
      <div class="relative rounded-3xl overflow-hidden h-[300px] bg-primary group">
        <img 
          src="https://picsum.photos/seed/audio/1200/400" 
          alt="Promo Banner" 
          class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          referrerpolicy="no-referrer"
        >
        <div class="absolute inset-0 flex flex-col justify-center px-16 text-white">
          <h2 class="text-4xl font-black mb-4 max-w-md leading-tight">
            Dive Into A World Of Crystal Clear Sound
          </h2>
          <button class="bg-white text-primary hover:bg-slate-100 px-8 py-3 rounded-lg font-bold w-fit transition-all shadow-lg">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class PromoBannerComponent {}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-brand-slider',
  imports: [MatIconModule],
  template: `
    <div class="py-12 bg-white">
      <div class="container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-slate-900">Brands</h2>
          <button class="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View All <mat-icon class="text-[16px] w-4 h-4">chevron_right</mat-icon>
          </button>
        </div>
        
        <div class="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          @for (i of [1,2,3,4,5,6,7,8]; track i) {
            <div class="w-24 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <img src="https://picsum.photos/seed/brand-{{i}}/100/50" alt="Brand" class="max-h-full object-contain" referrerpolicy="no-referrer">
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BrandSliderComponent {}

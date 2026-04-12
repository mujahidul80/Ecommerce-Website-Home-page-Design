import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="bg-white rounded-xl border border-slate-100 p-3 group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
      <!-- Badge -->
      @if (discount) {
        <div class="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md z-10">
          -{{discount}}%
        </div>
      }

      <!-- Image -->
      <div class="aspect-square rounded-lg overflow-hidden bg-slate-50 mb-4 relative">
        <img 
          [src]="image" 
          [alt]="name" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerpolicy="no-referrer"
        >
        <!-- Quick Actions -->
        <div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button class="w-8 h-8 rounded-full bg-white text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-sm">
            <mat-icon class="text-sm">visibility</mat-icon>
          </button>
          <button class="w-8 h-8 rounded-full bg-white text-slate-600 hover:bg-primary hover:text-white flex items-center justify-center transition-all shadow-sm">
            <mat-icon class="text-sm">favorite_border</mat-icon>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="space-y-1">
        <h3 class="text-sm font-medium text-slate-700 line-clamp-2 group-hover:text-primary transition-colors h-10">
          {{name}}
        </h3>
        
        <!-- Rating -->
        <div class="flex items-center gap-1">
          <div class="flex text-orange-400">
            @for (i of [1,2,3,4,5]; track i) {
              <mat-icon class="text-[14px] w-3.5 h-3.5">star</mat-icon>
            }
          </div>
          <span class="text-[10px] text-slate-400 font-medium">(0)</span>
        </div>

        <!-- Price -->
        <div class="flex items-center gap-2 pt-1">
          <span class="text-primary font-bold">{{price | currency}}</span>
          @if (oldPrice) {
            <span class="text-slate-400 text-xs line-through">{{oldPrice | currency}}</span>
          }
        </div>
      </div>

      <!-- Add to Cart Button (Visible on Hover) -->
      <button class="mt-3 w-full py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
        Add to Cart
      </button>
    </div>
  `,
  styles: [`
    :host { display: block; }
    mat-icon { font-size: inherit; width: auto; height: auto; }
  `]
})
export class ProductCardComponent {
  @Input() name = 'Product Name';
  @Input() price = 0;
  @Input() oldPrice?: number;
  @Input() discount?: number;
  @Input() image = 'https://picsum.photos/seed/product/400/400';
}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './product-card';

@Component({
  selector: 'app-featured-products',
  imports: [MatIconModule, ProductCardComponent],
  template: `
    <div class="py-12">
      <div class="container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-slate-900">Featured Products</h2>
          <button class="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View All <mat-icon class="text-[16px] w-4 h-4">chevron_right</mat-icon>
          </button>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          @for (product of products; track product.name) {
            <app-product-card 
              [name]="product.name" 
              [price]="product.price" 
              [image]="product.image"
            />
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FeaturedProductsComponent {
  products = [
    { name: '2020 MacBook Air M1', price: 1158, image: 'https://picsum.photos/seed/macbook/400/400' },
    { name: 'Fireplaces Cook Stoves', price: 1200, image: 'https://picsum.photos/seed/stove/400/400' },
    { name: 'Honor X14 Plus Laptop', price: 2200, image: 'https://picsum.photos/seed/laptop/400/400' },
    { name: 'Quercetinol Cleansing...', price: 10, image: 'https://picsum.photos/seed/cleanser/400/400' },
    { name: 'Moisturizing Cream', price: 15, image: 'https://picsum.photos/seed/cream/400/400' },
    { name: 'Beauty Facial Cleanser', price: 12, image: 'https://picsum.photos/seed/facial/400/400' },
  ];
}

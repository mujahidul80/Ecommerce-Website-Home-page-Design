import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './product-card';

@Component({
  selector: 'app-flash-deal',
  imports: [MatIconModule, ProductCardComponent],
  template: `
    <div class="bg-white py-12">
      <div class="container">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Countdown Card -->
          <div class="lg:w-1/4 bg-primary rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
            <div class="relative z-10">
              <h2 class="text-3xl font-black mb-2 uppercase italic">Flash Deal</h2>
              <p class="text-blue-100 text-sm mb-8">Hurry Up ! The offer is limited. Grab while it lasts</p>
              
              <div class="flex gap-3">
                <div class="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold">628</div>
                  <div class="text-[10px] uppercase font-bold opacity-60">Days</div>
                </div>
                <div class="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold">03</div>
                  <div class="text-[10px] uppercase font-bold opacity-60">Hours</div>
                </div>
                <div class="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold">35</div>
                  <div class="text-[10px] uppercase font-bold opacity-60">Min</div>
                </div>
                <div class="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                  <div class="text-2xl font-bold">57</div>
                  <div class="text-[10px] uppercase font-bold opacity-60">Sec</div>
                </div>
              </div>
            </div>
            <!-- Decorative Icon -->
            <mat-icon class="absolute -bottom-10 -right-10 text-[200px] w-auto h-auto opacity-10 rotate-12">bolt</mat-icon>
          </div>

          <!-- Products Grid -->
          <div class="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (product of flashProducts; track product.name) {
              <app-product-card 
                [name]="product.name" 
                [price]="product.price" 
                [oldPrice]="product.oldPrice"
                [discount]="product.discount"
                [image]="product.image"
              />
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FlashDealComponent {
  flashProducts = [
    { name: 'iPhone 14 Pro Max', price: 1149, oldPrice: 1299, discount: 12, image: 'https://picsum.photos/seed/iphone/400/400' },
    { name: 'Beauty Jelly Lipstick', price: 32, oldPrice: 45, discount: 28, image: 'https://picsum.photos/seed/lipstick/400/400' },
    { name: 'Leather Ladies Bag', price: 15, oldPrice: 25, discount: 40, image: 'https://picsum.photos/seed/bag/400/400' },
    { name: 'Samsung S24 Ultra', price: 1150, oldPrice: 1300, discount: 11, image: 'https://picsum.photos/seed/samsung/400/400' },
  ];
}

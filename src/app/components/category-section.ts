import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './product-card';

@Component({
  selector: 'app-category-section',
  imports: [MatIconModule, ProductCardComponent],
  template: `
    <div class="py-12">
      <div class="container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-slate-900 uppercase tracking-wide">{{title}}</h2>
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
export class CategorySectionComponent {
  @Input() title = 'Category';
  @Input() products: any[] = [];
}

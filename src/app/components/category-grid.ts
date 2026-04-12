import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-grid',
  imports: [MatIconModule],
  template: `
    <div class="py-12 bg-slate-50">
      <div class="container">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-bold text-slate-900">Categories</h2>
          <button class="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
            View All <mat-icon class="text-[16px] w-4 h-4">chevron_right</mat-icon>
          </button>
        </div>
        
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          @for (cat of categories; track cat.name) {
            <div class="flex flex-col items-center gap-3 group cursor-pointer">
              <div class="w-20 h-20 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                <img 
                  [src]="cat.image" 
                  [alt]="cat.name" 
                  class="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  referrerpolicy="no-referrer"
                >
              </div>
              <span class="text-xs font-bold text-slate-600 group-hover:text-primary transition-colors text-center">
                {{cat.name}}
              </span>
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
export class CategoryGridComponent {
  categories = [
    { name: "Men's Fashion", image: 'https://picsum.photos/seed/men/100/100' },
    { name: "Women's Fashion", image: 'https://picsum.photos/seed/women/100/100' },
    { name: "Kid's Fashion", image: 'https://picsum.photos/seed/kids/100/100' },
    { name: "Health & Beauty", image: 'https://picsum.photos/seed/beauty/100/100' },
    { name: "Pet Supplies", image: 'https://picsum.photos/seed/pets/100/100' },
    { name: "Home & Kitchen", image: 'https://picsum.photos/seed/kitchen/100/100' },
    { name: "Baby & Toddler", image: 'https://picsum.photos/seed/baby/100/100' },
    { name: "Sports & Outdoor", image: 'https://picsum.photos/seed/sports/100/100' },
  ];
}

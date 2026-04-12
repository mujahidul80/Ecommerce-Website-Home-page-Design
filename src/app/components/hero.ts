import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [MatIconModule],
  template: `
    <div class="container py-6">
      <div class="flex gap-6">
        <!-- Sidebar Categories -->
        <div class="w-64 bg-white rounded-xl shadow-sm border border-slate-100 hidden lg:block overflow-hidden">
          <ul class="py-2">
            @for (cat of categories; track cat.name) {
              <li class="px-4 py-2.5 flex items-center justify-between hover:bg-slate-50 cursor-pointer group transition-colors">
                <div class="flex items-center gap-3">
                  <mat-icon class="text-slate-400 group-hover:text-primary transition-colors text-[20px] w-5 h-5">{{cat.icon}}</mat-icon>
                  <span class="text-sm font-medium text-slate-600 group-hover:text-slate-900">{{cat.name}}</span>
                </div>
                <mat-icon class="text-slate-300 text-[16px] w-4 h-4">chevron_right</mat-icon>
              </li>
            }
          </ul>
        </div>

        <!-- Main Slider -->
        <div class="flex-1 relative rounded-2xl overflow-hidden group h-[400px]">
          <img 
            src="https://picsum.photos/seed/ecommerce-banner/1200/600" 
            alt="Hero Banner" 
            class="w-full h-full object-cover"
            referrerpolicy="no-referrer"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex flex-col justify-center px-12 text-white">
            <h2 class="text-blue-400 font-bold text-xl mb-2">Smart Home</h2>
            <h1 class="text-5xl font-extrabold mb-4 leading-tight">Smart Savings!</h1>
            <p class="text-lg text-slate-200 mb-8 max-w-md">Unmissable deals on all your home appliance needs.</p>
            <button class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold w-fit transition-all transform hover:scale-105">
              Get Yours
            </button>
          </div>
          
          <!-- Slider Dots -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/40"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeroComponent {
  categories = [
    { name: "Men's Fashion", icon: 'male' },
    { name: "Women's Fashion", icon: 'female' },
    { name: "Kid's Fashion", icon: 'child_care' },
    { name: "Health & Beauty", icon: 'spa' },
    { name: "Pet Supplies", icon: 'pets' },
    { name: "Home & Kitchen", icon: 'home' },
    { name: "Baby & Toddler", icon: 'child_friendly' },
    { name: "Sports & Outdoor", icon: 'sports_soccer' },
    { name: "Phone & Gadgets", icon: 'smartphone' },
  ];
}

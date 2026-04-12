import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  template: `
    <nav class="bg-white sticky top-0 z-50 shadow-sm">
      <!-- Main Nav -->
      <div class="container py-4 flex items-center gap-8">
        <!-- Logo -->
        <div class="flex items-center gap-2 cursor-pointer">
          <div class="bg-primary p-1.5 rounded-lg">
            <mat-icon class="text-white">shopping_bag</mat-icon>
          </div>
          <span class="text-2xl font-bold tracking-tight text-slate-900">6Valley</span>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 max-w-2xl hidden md:flex items-center">
          <div class="relative w-full">
            <input 
              type="text" 
              placeholder="Search for items..." 
              class="w-full pl-4 pr-12 py-2.5 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary/20 transition-all outline-none text-sm"
            >
            <button class="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors">
              <mat-icon>search</mat-icon>
            </button>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-5">
          <div class="relative cursor-pointer group">
            <mat-icon class="text-slate-600 group-hover:text-primary transition-colors">favorite_border</mat-icon>
            <span class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <div class="relative cursor-pointer group">
            <mat-icon class="text-slate-600 group-hover:text-primary transition-colors">person_outline</mat-icon>
          </div>
          <div class="flex items-center gap-3 cursor-pointer group">
            <div class="relative">
              <mat-icon class="text-slate-600 group-hover:text-primary transition-colors">shopping_cart</mat-icon>
              <span class="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <div class="hidden lg:block">
              <p class="text-[10px] text-slate-400 font-medium uppercase leading-none">My cart</p>
              <p class="text-xs font-bold text-slate-900">$0.00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Categories & Links -->
      <div class="bg-primary text-white hidden md:block">
        <div class="container flex items-center">
          <div class="bg-primary-dark px-6 py-3 flex items-center gap-3 cursor-pointer group relative">
            <mat-icon>menu</mat-icon>
            <span class="font-medium">Categories</span>
            <mat-icon>expand_more</mat-icon>
          </div>
          
          <div class="flex items-center gap-8 px-8 text-sm font-medium">
            <a href="#" class="hover:text-white/80 transition-colors">Home</a>
            <a href="#" class="hover:text-white/80 transition-colors">Brand</a>
            <div class="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors">
              <span>Offers</span>
              <mat-icon class="text-[16px] w-4 h-4">expand_more</mat-icon>
            </div>
            <a href="#" class="hover:text-white/80 transition-colors">Publication House</a>
            <a href="#" class="hover:text-white/80 transition-colors">All Vendors</a>
            <div class="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors">
              <span>Vendor Zone</span>
              <mat-icon class="text-[16px] w-4 h-4">expand_more</mat-icon>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class NavbarComponent {}

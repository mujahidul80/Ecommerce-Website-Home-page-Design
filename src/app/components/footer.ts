import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  template: `
    <footer class="bg-[#1b2129] text-white pt-16 pb-8">
      <div class="container">
        <!-- Service Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <mat-icon class="text-primary">local_shipping</mat-icon>
            </div>
            <div>
              <h4 class="font-bold text-sm">Fast Delivery</h4>
              <p class="text-xs text-slate-400">All across the country</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <mat-icon class="text-primary">payments</mat-icon>
            </div>
            <div>
              <h4 class="font-bold text-sm">Safe Payment</h4>
              <p class="text-xs text-slate-400">100% secure payment</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <mat-icon class="text-primary">assignment_return</mat-icon>
            </div>
            <div>
              <h4 class="font-bold text-sm">7 Days Return</h4>
              <p class="text-xs text-slate-400">If goods have problems</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <mat-icon class="text-primary">verified</mat-icon>
            </div>
            <div>
              <h4 class="font-bold text-sm">100% Authentic</h4>
              <p class="text-xs text-slate-400">Genuine products only</p>
            </div>
          </div>
        </div>

        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div class="space-y-6">
            <div class="flex items-center gap-2">
              <div class="bg-primary p-1 rounded-lg">
                <mat-icon class="text-white text-sm w-4 h-4">shopping_bag</mat-icon>
              </div>
              <span class="text-xl font-bold tracking-tight">6Valley</span>
            </div>
            <p class="text-sm text-slate-400 leading-relaxed">
              The best e-commerce platform for all your needs. We provide high-quality products at the best prices.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <mat-icon class="text-sm">facebook</mat-icon>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <mat-icon class="text-sm">camera_alt</mat-icon>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <mat-icon class="text-sm">twitter</mat-icon>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-bold mb-6">Quick Links</h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <li><a href="#" class="hover:text-primary transition-colors">Profile Info</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Flash Deals</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Featured Products</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Best Selling Products</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-6">Other</h4>
            <ul class="space-y-4 text-sm text-slate-400">
              <li><a href="#" class="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-6">Newsletter</h4>
            <p class="text-sm text-slate-400 mb-6">Subscribe to our newsletter to get latest updates.</p>
            <div class="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
              >
              <button class="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="pt-8 border-t border-white/10 text-center text-xs text-slate-500">
          <p>© 2026 6Valley. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FooterComponent {}

import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  template: `
    <div class="bg-white border-b border-slate-100 py-2 hidden md:block">
      <div class="container flex justify-between items-center text-xs text-slate-500">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <mat-icon class="text-[16px] w-4 h-4">phone</mat-icon>
            <span>+00xxxxxxxxxxx</span>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-1 cursor-pointer hover:text-primary">
            <span>USD $</span>
            <mat-icon class="text-[14px] w-3.5 h-3.5">expand_more</mat-icon>
          </div>
          <div class="flex items-center gap-1 cursor-pointer hover:text-primary">
            <img src="https://flagcdn.com/w20/us.png" alt="English" class="w-4 h-3 object-cover rounded-sm">
            <span>English</span>
            <mat-icon class="text-[14px] w-3.5 h-3.5">expand_more</mat-icon>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    mat-icon { font-size: inherit; width: auto; height: auto; }
  `]
})
export class HeaderComponent {}

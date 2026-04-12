import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {HeaderComponent} from './components/header';
import {NavbarComponent} from './components/navbar';
import {HeroComponent} from './components/hero';
import {FlashDealComponent} from './components/flash-deal';
import {CategoryGridComponent} from './components/category-grid';
import {FeaturedProductsComponent} from './components/featured-products';
import {PromoBannerComponent} from './components/promo-banner';
import {FooterComponent} from './components/footer';
import {BrandSliderComponent} from './components/brand-slider';
import {CategorySectionComponent} from './components/category-section';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    HeaderComponent,
    NavbarComponent,
    HeroComponent,
    FlashDealComponent,
    CategoryGridComponent,
    FeaturedProductsComponent,
    PromoBannerComponent,
    FooterComponent,
    BrandSliderComponent,
    CategorySectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  fashionProducts = [
    { name: 'Copper Alloy Inlaid...', price: 9, image: 'https://picsum.photos/seed/fashion1/400/400' },
    { name: 'Women Beautiful Whit...', price: 70, image: 'https://picsum.photos/seed/fashion2/400/400' },
    { name: 'Bohemiantee Shirt Tops', price: 22, image: 'https://picsum.photos/seed/fashion3/400/400' },
    { name: 'Leather Single Shoes', price: 32, image: 'https://picsum.photos/seed/fashion4/400/400' },
    { name: 'Vimly Women Blazer...', price: 200, image: 'https://picsum.photos/seed/fashion5/400/400' },
    { name: 'Handbag Bags For...', price: 50, image: 'https://picsum.photos/seed/fashion6/400/400' },
  ];

  gadgetProducts = [
    { name: 'iPhone 14 Pro Max', price: 1149, image: 'https://picsum.photos/seed/gadget1/400/400' },
    { name: 'Samsung S24 Ultra', price: 1150, image: 'https://picsum.photos/seed/gadget2/400/400' },
    { name: 'Smart Watch T900', price: 28, image: 'https://picsum.photos/seed/gadget3/400/400' },
    { name: 'Wireless Earbuds', price: 45, image: 'https://picsum.photos/seed/gadget4/400/400' },
    { name: 'Bluetooth Speaker', price: 60, image: 'https://picsum.photos/seed/gadget5/400/400' },
    { name: 'Power Bank 20000mAh', price: 35, image: 'https://picsum.photos/seed/gadget6/400/400' },
  ];
}




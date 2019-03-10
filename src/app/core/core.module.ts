import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrandPipe } from './pipes/brand.pipe';
import { OrderByPricePipe } from './pipes/order-by-price.pipe';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';
import { ShortenTitlePipe } from './pipes/shorten-title.pipe';
import { LayoutModeComponent } from './layout-mode/layout-mode.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BrandPipe, OrderByPricePipe, PriceFormatterPipe, ShortenTitlePipe, LayoutModeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, FooterComponent, BrandPipe, OrderByPricePipe, PriceFormatterPipe, ShortenTitlePipe, LayoutModeComponent
  ]
})
export class CoreModule { }

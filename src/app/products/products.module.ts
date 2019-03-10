import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { ProductSliderDotsComponent } from './product-slider-dots/product-slider-dots.component';
import {CoreModule} from '../core/core.module';
import { ProductListComponent } from './product-list/product-list.component';
import {PaginationModule} from '../pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductSliderComponent, ProductSliderDotsComponent, ProductListComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    PaginationModule,
    BrowserModule
  ],
  exports: [ProductComponent, ProductDetailComponent, ProductSliderComponent, ProductSliderDotsComponent, ProductListComponent]
})
export class ProductsModule { }

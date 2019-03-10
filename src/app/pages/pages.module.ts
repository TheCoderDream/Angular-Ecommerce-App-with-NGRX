import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import {ProductsModule} from '../products/products.module';
import {RouterModule} from '@angular/router';
import {pagesRoute} from './pages.route';
import {FiltersModule} from '../filters/filters.module';
import {ShoppingCartModule} from '../shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [HomeComponent, ProductDetailPageComponent, ShoppingCartPageComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule,
    FiltersModule,
    ShoppingCartModule,
    RouterModule.forChild(pagesRoute)
  ],
  exports: [RouterModule]
})
export class PagesModule { }

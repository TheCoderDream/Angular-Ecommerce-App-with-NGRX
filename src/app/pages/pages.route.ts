import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailPageComponent} from './product-detail-page/product-detail-page.component';
import {ShoppingCartPageComponent} from './shopping-cart-page/shopping-cart-page.component';

export const pagesRoute: Routes = [
  {path: 'products', component: HomeComponent},
  {path: 'products/:id', component: ProductDetailPageComponent},
  {path: 'cart', component: ShoppingCartPageComponent}
];

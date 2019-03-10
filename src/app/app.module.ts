import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {ProductsModule} from './products/products.module';
import {ShoppingCartModule} from './shopping-cart/shopping-cart.module';
import {PaginationModule} from './pagination/pagination.module';

import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducer';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CoreModule,
    ProductsModule,
    ShoppingCartModule,
    PaginationModule,
    PagesModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


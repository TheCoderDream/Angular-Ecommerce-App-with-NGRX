import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../core/models/Product';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {DecrementCartQuantity, IncrementCartQuantity, RemoveProductFromCart} from '../../store/shop/shop.action';


@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input('product') product: Product;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  onIncrementCartItem(): void {
    console.log('onIncrement cart click');
    this.store.dispatch(new IncrementCartQuantity(this.product.id));
  }

  onDecrementCartItem(): void {
    console.log('onDecrement cart click');
    this.store.dispatch(new DecrementCartQuantity(this.product.id));
  }

  onRemoveCartItem(): void {
    this.store.dispatch(new RemoveProductFromCart(this.product.id));
  }




}

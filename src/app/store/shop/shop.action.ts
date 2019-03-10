import {ShopActionTypes} from './shop.action.types';
import {Product} from '../../core/models/Product';

export class AddProductToCart {
  readonly type = ShopActionTypes.ADD_PRODUCT_TO_CART;

  constructor(public payload: Product) {
  }
}

export class RemoveProductFromCart {
  readonly type = ShopActionTypes.REMOVE_PRODUCT_FROM_CART;

  constructor(public payload: number) {
  }
}

export class IncrementCartQuantity {
  readonly type = ShopActionTypes.INCREMENT_CART_ITEM_QUANTITY;

  constructor(public payload: number) {
  }
}

export class DecrementCartQuantity {
  readonly type = ShopActionTypes.DECREMENT_CART_ITEM_QUANTITY;

  constructor(public payload: number) {
  }
}

export type ShopActions = AddProductToCart | RemoveProductFromCart | IncrementCartQuantity | DecrementCartQuantity;

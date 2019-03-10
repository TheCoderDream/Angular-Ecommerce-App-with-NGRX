import {Product} from '../../core/models/Product';
import {phones} from '../../core/data/phones';

import * as ShopActions from './shop.action';
import {ShopActionTypes} from './shop.action.types';

export interface State {
  products: Array<Product>;
  cart: Array<Product>;
}

const initialState: State = {
  products: phones,
  cart: []
};

export function shoppingListReducer(state = initialState, action: ShopActions.ShopActions) {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case ShopActionTypes.INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      if (updatedCart[updatedItemIndex].quantity > 9) {
        return state;
      }

      const incrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      incrementedItem.quantity++;

      updatedCart[updatedItemIndex] = incrementedItem;


      return {...state, cart: updatedCart};

    case ShopActionTypes.DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      if (updatedCart[updatedItemIndex].quantity < 2) {
        return state;
      }


      const decrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      decrementedItem.quantity--;

      updatedCart[updatedItemIndex] = decrementedItem;

      return {...state, cart: updatedCart};

    case ShopActionTypes.ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

      if (updatedItemIndex < 0) {
        updatedCart.push({...action.payload, quantity: 1});
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };

        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {...state, cart: updatedCart};
    case ShopActionTypes.REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      updatedCart.splice(updatedItemIndex, 1);

      return {...state, cart: updatedCart};
    default:
      return state;

  }

}

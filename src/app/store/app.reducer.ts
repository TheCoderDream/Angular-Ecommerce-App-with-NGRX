import {ActionReducerMap} from '@ngrx/store';

import * as fromShop from './shop/shop.reducer';
import * as fromBrandFilter from './brand-filter/brand-filter.reducer';
import * as fromPriceFilter from './price-filter/price-filter.reducer';

export interface AppState {
  shop: fromShop.State;
  brandFilter: string;
  orderBy: string;
}

export const reducers: ActionReducerMap<AppState> = {
  shop: fromShop.shoppingListReducer,
  brandFilter: fromBrandFilter.brandFilterReducer,
  orderBy: fromPriceFilter.orderByPriceReducer
};


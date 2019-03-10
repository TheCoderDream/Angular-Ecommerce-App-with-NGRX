import * as BrandFilterActions from './brand-filter.action';
import {BrandFilterActionTypes} from './brand-filter.action.types';


export function brandFilterReducer(state: string = '', action: BrandFilterActions.BrandFilterActions) {
  switch (action.type) {
    case BrandFilterActionTypes.ADD_BRAND_TO_FILTER:
      if (state.includes(action.payload)) {
        return state;
      }
      return state += action.payload;
    case BrandFilterActionTypes.REMOVE_BRAND_FROM_FILTER:
      console.log('remove brand', action);
      const reg = new RegExp(action.payload, 'gi');
      return state.replace(reg, '');
    case BrandFilterActionTypes.CLEAR_BRAND_FILTER:
      return '';
    default:
      return state;
  }
}

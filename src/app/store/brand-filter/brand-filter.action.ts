import {BrandFilterActionTypes} from './brand-filter.action.types';

export class AddBrandToFilter {
  readonly type = BrandFilterActionTypes.ADD_BRAND_TO_FILTER;

  constructor(public payload: string) {
  }
}

export class RemoveBrandFromFilter {
  readonly type = BrandFilterActionTypes.REMOVE_BRAND_FROM_FILTER;

  constructor(public payload: string) {
  }
}

export class ClearBrandFilter {
  readonly type = BrandFilterActionTypes.CLEAR_BRAND_FILTER;

  constructor() {
  }

}

export type BrandFilterActions = AddBrandToFilter | RemoveBrandFromFilter | ClearBrandFilter;

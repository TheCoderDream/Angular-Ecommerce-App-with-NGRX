import {PriceFilterTypes} from './price-filter.types';

export class OrderByAsc {
  readonly type = PriceFilterTypes.ORDER_BY_ASC;

  constructor() {
  }
}

export class OrderByDesc {
  readonly type = PriceFilterTypes.ORDER_BY_DESC;

  constructor() {

  }
}

export class ClearOrderBy {
  readonly type = PriceFilterTypes.CLEAR_ORDER_BY_PRICE;

  constructor() {
  }
}

export type PriceFilterActions = OrderByAsc | OrderByDesc | ClearOrderBy;

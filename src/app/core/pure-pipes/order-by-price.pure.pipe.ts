import {Product} from '../models/Product';
import {Order} from '../enums/order';

export const orderByPricePurePipe = (products: Product[], order?: Order): Product[] => {
  if (!order) { return products; }

  if (order === Order.ASC) {
    return products.slice().sort((el1, el2) => el1.price - el2.price);
  } else {
    return products.slice().sort((el1, el2) => el2.price - el1.price);
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {Order} from '../enums/order';
import {Product} from '../models/Product';

@Pipe({
  name: 'orderByPrice'
})
export class OrderByPricePipe implements PipeTransform {

  transform(products: Product[], order?: Order): Product[] {
    if (!order) { return products; }

    if (order === Order.ASC) {
      return products.slice().sort((el1, el2) => el1.price - el2.price);
    } else {
      return products.slice().sort((el1, el2) => el2.price - el1.price);
    }
  }

}

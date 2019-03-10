import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../models/Product';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(products: Product[], brand: string): Product[] {
    if (!brand) return products;

    return products.filter(product => brand.includes(product.brand));
  }

}

import {Product} from '../models/Product';

export const brandPurePipe = (products: Product[], brand: string): Product[] => {
  if (!brand) return products;
  return products.filter(product => brand.includes(product.brand));
};

import { OrderByPricePipe } from './order-by-price.pipe';

describe('OrderByPricePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPricePipe();
    expect(pipe).toBeTruthy();
  });
});

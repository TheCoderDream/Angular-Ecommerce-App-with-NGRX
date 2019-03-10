import { PriceFormatterPipe } from './price-formatter.pipe';

describe('PriceFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});

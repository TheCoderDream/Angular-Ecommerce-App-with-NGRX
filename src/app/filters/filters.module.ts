import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandFilterComponent } from './brand-filter/brand-filter.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';

@NgModule({
  declarations: [BrandFilterComponent, PriceFilterComponent],
  imports: [
    CommonModule
  ],
  exports: [BrandFilterComponent, PriceFilterComponent]
})
export class FiltersModule { }

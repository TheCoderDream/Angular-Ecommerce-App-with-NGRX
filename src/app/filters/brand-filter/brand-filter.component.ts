import {Component, OnInit} from '@angular/core';
import {brands} from '../../core/data/brands';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {AddBrandToFilter, RemoveBrandFromFilter} from '../../store/brand-filter/brand-filter.action';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {


  brands = brands;
  brandItemsCount;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('shop').subscribe(shop => {
      const counts = {};
      shop.products.forEach(p => {
        counts[p.brand] = counts[p.brand] + 1 || 1;
      });
      this.brandItemsCount = counts;
    });
  }

  onChangeSelectBox(e): void {
    const name = e.target.name;
    const value = e.target.checked;

    if (value) {
      this.store.dispatch(new AddBrandToFilter(name));
    } else {
      this.store.dispatch(new RemoveBrandFromFilter(name));
    }
  }

}

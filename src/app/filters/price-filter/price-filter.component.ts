import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {ClearOrderBy, OrderByAsc, OrderByDesc} from '../../store/price-filter/price-filter.action';
import {Order} from '../../core/enums/order';


@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  selectedFilter = '';
  Order = Order;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  onRadioButtonChange(e): void {
    const value = e.target.value;
    if (value === this.selectedFilter) {
      this.removefilters();
      return;
    }

    this.selectedFilter = value;

    if (value === Order.ASC) {
      this.store.dispatch(new OrderByAsc());
    } else {
      this.store.dispatch(new OrderByDesc());
    }
  }

  removefilters(): void {
    const buttons = document.getElementsByName('orderByPrice') as NodeList;

    buttons.forEach((el: HTMLInputElement) => {
      el.checked = false;
    });
    this.selectedFilter = '';
    this.store.dispatch(new ClearOrderBy());
  }

}

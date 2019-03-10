import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Product} from '../../core/models/Product';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit, DoCheck {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {
  }

  ngDoCheck() {
    console.log(this.product);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;

    this.store.select('shop')
      .subscribe((data) => {
        console.log(data);
        for (let i = 0; i < data.products.length; i++) {
          if (data.products[i].id === +this.id) {
            console.log(this);

            this.product = data.products[i];
            break;
          }
        }
      });

  }

}


import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Product} from '../../core/models/Product';
import {cumulativeOffSet} from '../../utilities/cumulativeOffset';
import {Store} from '@ngrx/store';
import {AddProductToCart} from '../../store/shop/shop.action';
import * as fromApp from '../../store/app.reducer';
import {EventTypes} from '../../core/enums/event-types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
  @ViewChild('productImageContainer') productImageContainer: ElementRef;

  currentImage: string;
  currentImageIndex: number;
  productImageContainerClientWidth;
  offSetLeft: number;
  offSetTop: number;

  constructor(private store: Store<fromApp.AppState>) {
  }


  ngOnInit() {
    this.currentImage = this.product.images[0];
    this.currentImageIndex = 0;

  }

  onImageChange(e): void {
    console.log(e);
    const eventType = e.type as EventTypes;
    let clientX;
    this.calculateOffSetLeftAndTop(eventType);

    if (eventType === EventTypes.TOUCH_MOVE) {
      clientX = e.touches[0].clientX;
    } else if (eventType === EventTypes.MOUSE_MOVE) {
      clientX = e.clientX;
    }

    const currentX = clientX - this.offSetLeft;
    const imgArrLength = this.product.images.length;

    const part = this.productImageContainerClientWidth / imgArrLength;

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= imgArrLength) {
      imgIndex = imgArrLength - 1;
    }

    this.currentImageIndex = imgIndex;
    this.currentImage = this.product.images[imgIndex];
  }

  onImageMouseOut(e: MouseEvent): void {
    this.currentImage = this.product.images[0];
  }

  onChangeImage(n: number): void {
    this.currentImage = this.product.images[n];
  }

  onAddProductToCart(): void {
    this.store.dispatch(new AddProductToCart(this.product));
  }


  calculateOffSetLeftAndTop(eventType: EventTypes): void {
    const offSetTopAndLeft = cumulativeOffSet(this.productImageContainer.nativeElement, eventType);
    this.offSetLeft = offSetTopAndLeft.left;
    this.offSetTop = offSetTopAndLeft.top;
    this.productImageContainerClientWidth = this.productImageContainer.nativeElement.clientWidth;
  }


}

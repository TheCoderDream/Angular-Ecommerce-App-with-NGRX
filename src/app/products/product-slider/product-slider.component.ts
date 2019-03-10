import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {

  @Input('images') images: string[];
  currentImage: string;

  constructor() {
  }

  ngOnInit() {
    this.currentImage = this.images[0];
  }

  changeImage(n: number): void {
    this.currentImage = this.images[n];
  }

  handleImageChange(): void {

  }

  handleMouseOut(): void {

  }

}

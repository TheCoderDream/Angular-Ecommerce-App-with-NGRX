import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input('currentPage') currentPage: number;
  @Input('totalItemsCount') totalItemsCount: number;
  @Input('perPage') perPage: number;
  @Input('pagesToShow') pagesToShow: number;

  @Output() prev = new EventEmitter<boolean>();
  @Output() next = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();

  constructor() {
  }


  ngOnInit() {
  }

  onPage(n: number): void {
    this.goPage.emit(n);
    console.log(this.getPages());
  }

  isOnLastPage(): boolean {
    // console.log(this.perPage * this.currentPage, this.totalItemsCount);
    return this.perPage * this.currentPage >= this.totalItemsCount;
  }

  totalPages(): number {
    return Math.ceil(this.totalItemsCount / this.perPage) || 0;
  }

  getMin(): number {
    return ((this.perPage * this.currentPage) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.currentPage;
    if (max > this.totalItemsCount) {
      max = this.totalItemsCount;
    }
    return max;
  }
  onPrev(): void {
    this.prev.emit(true);
  }

  onNext(): void {
    this.next.emit(true);
  }


  getPages(): number[] {
    const c = Math.ceil(this.totalItemsCount / this.perPage);
    const p = this.currentPage || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [PaginationComponent, PaginationPipe],
  imports: [
    CommonModule
  ],
  exports: [PaginationComponent, PaginationPipe]
})
export class PaginationModule { }

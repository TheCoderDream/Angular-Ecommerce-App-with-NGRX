import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: Array<any>, args: {currentPage: number, perPage: number}): Array<any> {
    if (!args || !args.perPage || !args.currentPage) {
      return value;
    }
    const location = (args.perPage * (args.currentPage - 1)) || 0 ;
    return value.slice(location, location + args.perPage);

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!args) {
      return value;
    } else {
      args = args.toLocaleLowerCase();
    }
    return value.filter((note: any) => {
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);

    })
  }

}

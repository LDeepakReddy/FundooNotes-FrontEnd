import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any,filteredString:string) {
    if(value.length === 0){
      return value;
    }
    const searchnotes =[];
    for(const searchnote of value){
      if(searchnote['title'] === filteredString || searchnote['description'] ===filteredString){
        searchnotes.push(searchnote);
      }
    }
    return searchnotes;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (
      value.length === 0 ||
      filterString === undefined ||
      filterString === ''
    ) {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      let shortName = '';
      if (propName === 'university') {
        shortName = item['shortName'].toLowerCase().trim() ?? '';
      } else {
        shortName = item.university['shortName'].toLowerCase().trim() ?? '';
      }

      if (shortName === filterString.toLowerCase().trim()) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

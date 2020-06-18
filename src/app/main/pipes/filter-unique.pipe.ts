import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../models/company.interface';

@Pipe({
  name: 'filterUnique'
})
export class FilterUniquePipe implements PipeTransform {

  transform(arrays: Company[], ...args: any[]): any[] {
    return [...new Set(arrays.map(item => item.type))];
  }

}

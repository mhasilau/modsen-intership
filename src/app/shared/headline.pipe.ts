import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headline'
})
export class HeadlinePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('. ').map(el => (el[0].toUpperCase()) + el.slice(1)).join('. ');
  }
}

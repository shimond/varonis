import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix',
  //pure: true
})
export class SuffixPipe implements PipeTransform {

  transform(value: string, c: string = '!', repeat: number = 1): string {
    // console.log('SuffixPipe');
    return value + c.repeat(repeat);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Pipe({
  name: 'personSpecial'
})
export class PersonSpecialPipe implements PipeTransform {

  transform(person: Person, ...args: unknown[]): unknown {
    console.log('isSpecial check in pipe');
    return person.age > 65 && person.name.includes('a');
  }

}

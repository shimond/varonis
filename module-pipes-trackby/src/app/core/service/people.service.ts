import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Person } from 'src/app/model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }
  //Observable<Person[]>
  getPeople(): Promise<Person[]> {
    const people: Person[] = [
      { id: 1, name: 'Shimon', age: 14 },
      { id: 2, name: 'David', age: 91 },
      { id: 3, name: 'Naama', age: 88 },
      { id: 4, name: 'Gilad', age: 54 },
      { id: 5, name: 'Tal', age: 23 },
      { id: 6, name: 'Moshe', age: 65 },
      { id: 7, name: 'Tehila', age: 28 }];
      // return of(people);
    return Promise.resolve(people);
  }

}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PeopleService } from 'src/app/core/service/people.service';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  //  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {

  // people: ReadonlyArray<Person> = [];
  people: Person[] = [];

  time = new Date();
  constructor(private readonly peopleService: PeopleService) { }

  async ngOnInit() {
    this.people = await this.peopleService.getPeople();
  }

  getUnique(index: number, person: Person) {
    return person.id;
    // return index;
  }

  addNewPerson() {
    // this.people.push({ id: 8, name: 'Golan', age: 78 });
    const tmpList = [{ id: 8, name: 'Golan', age: 78 }, ...this.people];
    this.people = tmpList.map(x => ({ ...x }));


  }

  stam() { }

}

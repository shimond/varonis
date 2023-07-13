import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Address, Person } from 'src/app/model/person.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NumberEditComponent } from '../number-edit/number-edit.component';
import { AddressInputComponent } from '../address-input/address-input.component';
import { StringListEditComponent } from '../string-list-edit/string-list-edit.component';
import { GenericFormArrayComponent } from '../generic-form-array/generic-form-array.component';


@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [
    GenericFormArrayComponent,
    StringListEditComponent,
    AddressInputComponent,
    NumberEditComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  person: Person = {
    start: new Date(), end: new Date(),
    firstName: 'David', lastName: 'Levi', age: 82, isAdmin: true,
    addresses: [{
      country: 'Israel',
      city: 'Tel-aviv',
      street: 'Tyomkin'
    }], hobbies: ['Basketball', 'C#']
  };

  personForm = this.fb.group({
    firstName: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0, [Validators.required, this.even]),
    isAdmin: new FormControl<boolean>(false, []),
    start: new FormControl<Date | null>(null, []),
    end: new FormControl<Date | null>(null, []),
    addresses: new FormControl<Address[]>([]),
    hobbies: new FormControl<string[]>([])
  }, { validators: [this.validateDates] });


  constructor(private readonly fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.personForm.patchValue(this.person);
    this.personForm.controls.age.disable();
    this.personForm.valueChanges.subscribe((x: any) => console.log(x));
  }

  save() {
    this.person = this.personForm.getRawValue() as Person;
  }

  validateDates(control: AbstractControl): ValidationErrors | null {
    const per: Person = control.value;
    if (!per.start || !per.end) {
      return null;
    }
    if (per.start.valueOf() - per.end.valueOf() > 0) {
      return { 'formDateRangeError': true };
    }
    return null;
  }

  even(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      if (control.value % 2 !== 0) {
        return { "even": true };
      }
    }
    return null
  }

}

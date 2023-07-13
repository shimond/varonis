import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Person } from 'src/app/model/person.model';
import { ReturnStatement } from '@angular/compiler';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-edit-person',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule],
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  person: Person = { firstName: 'David', lastName: 'Levi', age: 82, isAdmin: true };

  personForm = this.fb.group({
    firstName: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl<string>('', [Validators.required]),
    age: new FormControl<number>(0, [Validators.required, this.even]),
    isAdmin: new FormControl<boolean>(false, [])
  });


  constructor(private readonly fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.personForm.patchValue(this.person);
    this.personForm.valueChanges.subscribe(x => console.log(x));
  }

  save() {
    // save to server
    this.person = this.personForm.getRawValue() as Person;
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

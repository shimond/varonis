import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-string-list-edit',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StringListEditComponent,
      multi: true
    }
  ],
  imports: [CommonModule, MatInputModule, MatFormFieldModule,
    FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './string-list-edit.component.html',
  styleUrls: ['./string-list-edit.component.scss']
})
export class StringListEditComponent implements ControlValueAccessor {

  stringList = this.fb.array([]);
  callBack: any;

  constructor(private readonly fb: FormBuilder) {
    this.stringList.valueChanges.subscribe(o => {
      if (this.callBack) {
        this.callBack(o);
      }
    })
  }

  writeValue(values: string[]): void {
    if (!values) {
      return;
    }
    this.stringList.clear();
    for (let index = 0; index < values.length; index++) {
      this.add();
    }
    this.stringList.patchValue(values, { emitEvent: false });
  }

  registerOnChange(fn: (arr: string[]) => void): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.stringList.disable();
    } else {
      this.stringList.enable();
    }
  }

  add() {
    this.stringList.push(new FormControl<string>(''));
  }

  remove(idx: number) {
    this.stringList.removeAt(idx);
  }



}

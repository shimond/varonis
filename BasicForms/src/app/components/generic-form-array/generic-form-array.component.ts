import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-generic-form-array',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GenericFormArrayComponent,
      multi: true
    }
  ], standalone: true,

  imports: [CommonModule, MatButtonModule],
  templateUrl: './generic-form-array.component.html',
  styleUrls: ['./generic-form-array.component.scss']
})
export class GenericFormArrayComponent<T = string> implements ControlValueAccessor {

  @Input() itemTemplate?: TemplateRef<any>;
  valuesArray = this.fb.array([]);
  callBack: any;

  constructor(private readonly fb: FormBuilder) {
    this.valuesArray.valueChanges.subscribe(o => {
      if (this.callBack) {
        this.callBack(o);
      }
    })
    //await this.waitForNextCycle();
  }

  waitForNextCycle(delay: number = 0) {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 5000);
    });
  }


  writeValue(values: T[]): void {
    if (!values) {
      return;
    }
    this.valuesArray.clear();
    for (let index = 0; index < values.length; index++) {
      this.add();
    }
    this.valuesArray.patchValue(values, { emitEvent: false });
  }

  registerOnChange(fn: (arr: T[]) => void): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.valuesArray.disable();
    } else {
      this.valuesArray.enable();
    }
  }

  add() {
    this.valuesArray.push(new FormControl<T | null>(null));
  }

  remove(idx: number) {
    this.valuesArray.removeAt(idx);
  }

}

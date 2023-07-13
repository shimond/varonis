import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-edit.component.html',
  styleUrls: ['./number-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumberEditComponent,
      multi: true
    }
  ]
})
export class NumberEditComponent implements ControlValueAccessor {
  count = 0;
  disabled = false;
  callBack?:  (num: number) => void;

  writeValue(num: number): void {
    this.count = num;
  }

  registerOnChange(fn: (num: number) => void): void {
    this.callBack = fn;
  }

  registerOnTouched(fn: () => void): void {
  
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  raiseEvent() {
    if (this.callBack) {
      this.callBack(this.count);
    }
  }

  plus() {
    this.count++;
    this.raiseEvent();
  }

  minus() {
    this.count--;
    this.raiseEvent();
  }



}

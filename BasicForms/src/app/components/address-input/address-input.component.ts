import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Address } from 'src/app/model/person.model';

@Component({
  selector: 'app-address-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressInputComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressInputComponent,
      multi: true
    }
  ]
})
export class AddressInputComponent implements ControlValueAccessor, Validator {

  addressForm = this.fb.group({
    country: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    street: new FormControl<string>(''),
  });

  callback?: (ad: Partial<Address>) => void;
  validationChanged?: () => void;

  constructor(private readonly fb: FormBuilder) {
    this.addressForm.valueChanges.subscribe((o: any) => {
      if (this.callback && this.addressForm.valid) {
        this.callback(o);
      } else {
        if (this.validationChanged) {
          this.validationChanged();
        }
      }
    });
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.addressForm.valid) {
      return null;
    }
    return { 'addressValidation': true };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.validationChanged = fn;
  }

  writeValue(obj: Address): void {
    this.addressForm.patchValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: (ad: Partial<Address>) => void): void {
    this.callback = fn;
  }

  registerOnTouched(fn: () => void): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.addressForm.disable();
    } else {
      this.addressForm.enable();
    }
  }


}

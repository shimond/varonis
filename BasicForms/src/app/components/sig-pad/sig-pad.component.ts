import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSignaturePadModule, NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-sig-pad',
  standalone: true,
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:SigPadComponent,
      multi:true
    }
  ],
  imports: [CommonModule, AngularSignaturePadModule],
  templateUrl: './sig-pad.component.html',
  styleUrls: ['./sig-pad.component.scss']
})
export class SigPadComponent implements ControlValueAccessor {

  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;
  public signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 200,
    canvasHeight: 100
  };
  changeCallBack: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('asdsad');
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
    this.changeCallBack = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {

  }

  drawComplete(event: MouseEvent | Touch) {
    if(this.changeCallBack){
      this.changeCallBack(this.signaturePad.toDataURL());
    }
  }
 
  

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }
}

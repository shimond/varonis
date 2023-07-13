import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent, CommonModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }






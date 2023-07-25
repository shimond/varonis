import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { SuffixPipe } from './pipes/suffix.pipe';
import { PersonSpecialPipe } from './pipes/person-special.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    PersonListComponent,
    SuffixPipe,
    PersonSpecialPipe
  ],
  exports: [
    SuffixPipe,
    HeaderComponent, PersonListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

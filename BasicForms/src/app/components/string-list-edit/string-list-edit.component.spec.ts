import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringListEditComponent } from './string-list-edit.component';

describe('StringListEditComponent', () => {
  let component: StringListEditComponent;
  let fixture: ComponentFixture<StringListEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StringListEditComponent]
    });
    fixture = TestBed.createComponent(StringListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

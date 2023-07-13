import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormArrayComponent } from './generic-form-array.component';

describe('GenericFormArrayComponent', () => {
  let component: GenericFormArrayComponent;
  let fixture: ComponentFixture<GenericFormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GenericFormArrayComponent]
    });
    fixture = TestBed.createComponent(GenericFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

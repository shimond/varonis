import { TestBed } from '@angular/core/testing';

import { MainDecativateService } from './main-decativate.service';

describe('MainDecativateService', () => {
  let service: MainDecativateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainDecativateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

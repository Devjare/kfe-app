import { TestBed } from '@angular/core/testing';

import { FirstoreServiceService } from './firstore-service.service';

describe('FirstoreServiceService', () => {
  let service: FirstoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

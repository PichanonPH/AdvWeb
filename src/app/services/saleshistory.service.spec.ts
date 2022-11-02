import { TestBed } from '@angular/core/testing';

import { SaleshistoryService } from './saleshistory.service';

describe('SaleshistoryService', () => {
  let service: SaleshistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleshistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

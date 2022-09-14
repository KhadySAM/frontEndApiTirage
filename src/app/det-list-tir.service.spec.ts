import { TestBed } from '@angular/core/testing';

import { DetListTirService } from './det-list-tir.service';

describe('DetListTirService', () => {
  let service: DetListTirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetListTirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

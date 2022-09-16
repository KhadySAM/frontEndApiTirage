import { TestBed } from '@angular/core/testing';

import { TiragetotalService } from './tiragetotal.service';

describe('TiragetotalService', () => {
  let service: TiragetotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiragetotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

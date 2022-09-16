import { TestBed } from '@angular/core/testing';

import { ListtirerService } from './listtirer.service';

describe('ListtirerService', () => {
  let service: ListtirerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListtirerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

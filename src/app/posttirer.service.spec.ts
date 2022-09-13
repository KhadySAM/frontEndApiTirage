import { TestBed } from '@angular/core/testing';

import { PosttirerService } from './posttirer.service';

describe('PosttirerService', () => {
  let service: PosttirerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosttirerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

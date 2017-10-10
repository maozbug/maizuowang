import { TestBed, inject } from '@angular/core/testing';

import { ScrlistService } from './scrlist.service';

describe('ScrlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrlistService]
    });
  });

  it('should be created', inject([ScrlistService], (service: ScrlistService) => {
    expect(service).toBeTruthy();
  }));
});

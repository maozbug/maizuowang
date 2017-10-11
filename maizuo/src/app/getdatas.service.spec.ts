import { TestBed, inject } from '@angular/core/testing';

import { GetdatasService } from './getdatas.service';

describe('GetdatasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdatasService]
    });
  });

  it('should be created', inject([GetdatasService], (service: GetdatasService) => {
    expect(service).toBeTruthy();
  }));
});

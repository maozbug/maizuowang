import { TestBed, inject } from '@angular/core/testing';

import { ShowleftService } from './showleft.service';

describe('ShowleftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowleftService]
    });
  });

  it('should be created', inject([ShowleftService], (service: ShowleftService) => {
    expect(service).toBeTruthy();
  }));
});

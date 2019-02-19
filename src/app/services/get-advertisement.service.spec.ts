import { TestBed } from '@angular/core/testing';

import { GetAdvertisementService } from './get-advertisement.service';

describe('GetAdvertisementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAdvertisementService = TestBed.get(GetAdvertisementService);
    expect(service).toBeTruthy();
  });
});

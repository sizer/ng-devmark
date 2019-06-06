import { TestBed } from '@angular/core/testing';

import { DevmarkService } from './devmark.service';

describe('DevmarkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevmarkService = TestBed.get(DevmarkService);
    expect(service).toBeTruthy();
  });
});

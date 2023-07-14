import { TestBed } from '@angular/core/testing';

import { FakeEndpointsService } from './fake-endpoints.service';

describe('FakeEndpointsService', () => {
  let service: FakeEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

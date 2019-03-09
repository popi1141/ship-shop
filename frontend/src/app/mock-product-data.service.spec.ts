import { TestBed } from '@angular/core/testing';

import { MockProductDataService } from './mock-product-data.service';

describe('MockProductDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockProductDataService = TestBed.get(MockProductDataService);
    expect(service).toBeTruthy();
  });
});

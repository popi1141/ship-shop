import { TestBed } from '@angular/core/testing';

import { ProductReadingsService } from './product-readings.service';

describe('ProductReadingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductReadingsService = TestBed.get(ProductReadingsService);
    expect(service).toBeTruthy();
  });
});

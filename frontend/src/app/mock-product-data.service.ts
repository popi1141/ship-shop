import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MockProductDataService {
  mock_product = new Product(
    'Canadian Banana',
    'Victoria',
    95,
    45.222,
    86.543,
    new Date(2018, 11, 24, 10, 33, 30, 0),
    new Date(2018, 11, 30, 10, 33, 30, 0),
    5
  );
  constructor() { }

  getAvailableProducts(): Array<Product> {
    return [this.mock_product];
  }
}

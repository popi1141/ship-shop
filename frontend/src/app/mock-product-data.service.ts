import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MockProductDataService {
  constructor() { }

  getAvailableProducts(): Array<Product> {
    return [];
  }
}

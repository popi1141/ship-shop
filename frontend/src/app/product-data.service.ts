import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor() { }

  getAvailableProducts(): Array<Product> {
    return [];
  }
}

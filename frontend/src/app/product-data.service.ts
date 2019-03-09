import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getAvailableProducts(): Array<Product> {
    // this.http.get("https://dog.ceo/api/breeds/image/random").subscribe((response, err) => {
    // });
    return [];
  }
}

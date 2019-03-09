import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { MockProductDataService } from '../mock-product-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products: Array<Product>;
  constructor(private api: MockProductDataService) { }

  ngOnInit() {
    this.products = this.api.getAvailableProducts();
  }

}

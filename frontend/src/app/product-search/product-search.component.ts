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
  products = [];
  constructor(private api: ProductDataService) { }

  ngOnInit() {
    this.api.getAllContainers().subscribe((resp) => {
      resp['containers'].map((val) => {
        if (val['highestBid'] === null) {
          val['highestBid'] = 0;
        }
        this.products.push(new Product(
          val.name,
          val.origin,
          val.destination,
          val.weight,
          val.shipDate,
          val.arriveDate,
          val.highestBid,
          val.src
        ));
      });
    });
  }

}

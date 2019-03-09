import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductReadingsService } from '../product-readings.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  constructor(private api: ProductReadingsService) { }

  ngOnInit() {
    console.log("run");
    console.log(this.api.getReadings(1));
  }

}

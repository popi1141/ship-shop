import { Component, OnInit } from '@angular/core';
import { ProductReadingsService } from '../product-readings.service';

@Component({
  selector: 'app-product-reading',
  templateUrl: './product-reading.component.html',
  styleUrls: ['./product-reading.component.css']
})
export class ProductReadingComponent implements OnInit {

  constructor(private api: ProductReadingsService) { }

  ngOnInit() {

  }

}

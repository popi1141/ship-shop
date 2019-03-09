import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataChartComponent } from './product-data-chart.component';

describe('ProductDataChartComponent', () => {
  let component: ProductDataChartComponent;
  let fixture: ComponentFixture<ProductDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

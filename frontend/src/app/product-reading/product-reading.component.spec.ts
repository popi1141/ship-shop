import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReadingComponent } from './product-reading.component';

describe('ProductReadingComponent', () => {
  let component: ProductReadingComponent;
  let fixture: ComponentFixture<ProductReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

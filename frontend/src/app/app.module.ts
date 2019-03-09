import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDataService } from './product-data.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { MockProductDataService } from './mock-product-data.service';
import { ProductDataChartComponent } from './product-data-chart/product-data-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { BidFormComponent } from './bid-form/bid-form.component';
=======
import { ProductReadingComponent } from './product-reading/product-reading.component';
import { LoginComponent } from './login/login.component';
>>>>>>> 520de8906598575f068c31527cf19bfc2420270d

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    ProductCardComponent,
    ProductDataChartComponent,
    NavbarComponent,
<<<<<<< HEAD
    BidFormComponent,
=======
    ProductReadingComponent,
    LoginComponent,
>>>>>>> 520de8906598575f068c31527cf19bfc2420270d
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BidFormComponent } from './bid-form/bid-form.component';

const routes: Routes = [
  { path: '', component: ProductSearchComponent },
  { path: 'container/:id', component: ProductDetailComponent },
  { path: 'bid', component: BidFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdcutRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpcomingProductsComponent } from './upcoming-products/upcoming-products.component';
import { ProductReviewComponent } from './product-details/product-review/product-review.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    UpcomingProductsComponent,
    ProductDetailsComponent,
    ProductReviewComponent,
    CartComponent
  ],
  imports: [
    ProdcutRoutingModule,
    CommonModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'product-list'
  },
  {
    path : 'product-list',
    component : ProductComponent
  },
  {
    path : 'product-details/:id',
    component : ProductDetailsComponent
  },
  {
    path : 'cart',
    component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdcutRoutingModule { }

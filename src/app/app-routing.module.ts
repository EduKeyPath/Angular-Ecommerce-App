import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
  },
  {
    path : 'about',
    component : AboutComponent
  },
  {
    path : 'products',
    loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
  },
  {
    path : 'payment',
    loadChildren : () => import('./components/payment/payment.module').then(m => m.PaymentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

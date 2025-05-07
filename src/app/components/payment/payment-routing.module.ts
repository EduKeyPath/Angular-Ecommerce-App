import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentComponent } from './payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'pay'
  },
  {
    path : 'pay',
    component : PaymentComponent
  },
  {
    path : 'payment-success',
    component : PaymentSuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }

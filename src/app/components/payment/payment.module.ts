import { NgModule } from '@angular/core';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentSuccessComponent
  ],
  imports: [
    PaymentRoutingModule
  ]
})
export class PaymentModule { }

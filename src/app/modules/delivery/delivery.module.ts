import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ResumeOrderComponent } from './components/resume-order/resume-order.component';
import { InstrucctionsComponent } from './components/instrucctions/instrucctions.component';
import { CartModule } from '../cart/cart.module';
import { ConfirmOrderComponent } from './pages/confirm-order/confirm-order.component';


@NgModule({
	declarations: [
		DeliveryFormComponent,
		OrderConfirmationComponent,
		ResumeOrderComponent,
		InstrucctionsComponent,
  ConfirmOrderComponent
	],
	imports: [
		CommonModule,
		DeliveryRoutingModule,
		ReactiveFormsModule,
		CartModule
	]
})
export class DeliveryModule { }

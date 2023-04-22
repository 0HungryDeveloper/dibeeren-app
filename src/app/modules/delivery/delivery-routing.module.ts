import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { ConfirmOrderComponent } from './pages/confirm-order/confirm-order.component';

const routes: Routes = [
	{
		path: '',
		component: DeliveryFormComponent
	},
	{
		path: 'order-confirmation',
		component: OrderConfirmationComponent
	},
	{
		path: 'instrucctions',
		component: ConfirmOrderComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DeliveryRoutingModule { }

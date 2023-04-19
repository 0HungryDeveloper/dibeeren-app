import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		DeliveryFormComponent
	],
	imports: [
		CommonModule,
		DeliveryRoutingModule,
		ReactiveFormsModule
	]
})
export class DeliveryModule { }

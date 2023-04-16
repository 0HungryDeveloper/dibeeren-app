import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { CardItemCartComponent } from './components/card-item-cart/card-item-cart.component';


@NgModule({
	declarations: [
		CartComponent,
  CardItemCartComponent
	],
	imports: [
		CommonModule,
		CartRoutingModule
	]
})
export class CartModule { }

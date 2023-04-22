import { Component, EventEmitter, OnInit, Output, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';
import { ICustomer } from 'src/app/data/interfaces/icustomer';
import { IOrder } from 'src/app/data/interfaces/iorder';

@Component({
	selector: 'app-resume-order',
	templateUrl: './resume-order.component.html',
	styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent implements OnInit {

	customerInformation$ = this.deliveryService.getCustomerInformation$();

	listCart$ = this.cartService.cart$;

	orderProductsList: ICartProduct[] = [];
	customer: ICustomer = null;

	constructor(
		private router: Router,
		private deliveryService: DeliveryService,
		@Inject(LOCALE_ID) private locale: string,
		private cartService: CartService
	) { }

	ngOnInit(): void {
		this.locale = 'es';
	}

	onConfirmOder() {
		this.cartService.cart$.subscribe(
			products => this.orderProductsList = products
		);

		this.deliveryService.getCustomerInformation$().subscribe(
			customer => this.customer = customer
		);

		const orderInformation: IOrder = {
			id: this.generateRandomIdOrder(),
			orderProducts: this.orderProductsList,
			customerInformation: this.customer
		}

		console.log(orderInformation);

		this.deliveryService.createOrder(orderInformation);

		this.deliveryService.setOrderId(orderInformation.id);

		this.router.navigate(['/delivery/instrucctions']);
	}

	onCancelOrder() {
		this.router.navigate([`/delivery`]);
	}

	private generateRandomIdOrder() : number{
		return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
	}
}

import { Component, EventEmitter, OnInit, Output, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
  selector: 'app-resume-order',
  templateUrl: './resume-order.component.html',
  styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent implements OnInit{

	@Output() userConfirmOrder = new EventEmitter<boolean>();

	customerInformation$ = this.deliveryService.getCustomerInformation$();

	listCart$ = this.cartService.cart$;

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
		this.userConfirmOrder.emit(false)
	}

	onCancelOrder() {
		this.router.navigate([`/delivery`]);
	}
}

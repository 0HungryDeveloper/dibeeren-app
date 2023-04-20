import { Component, EventEmitter, OnInit, Output, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-resume-order',
  templateUrl: './resume-order.component.html',
  styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent implements OnInit{

	@Output() userConfirmOrder = new EventEmitter<boolean>();

	customerInformation$ = this.deliveryService.getCustomerInformation$();

	constructor(
		private router: Router,
		private deliveryService: DeliveryService,
		@Inject(LOCALE_ID) private locale: string
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

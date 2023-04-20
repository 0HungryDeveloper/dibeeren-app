import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-resume-order',
  templateUrl: './resume-order.component.html',
  styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent implements OnInit{

	@Output() userConfirmOrder = new EventEmitter<boolean>();

	constructor(
		private router: Router,
		private deliveryService: DeliveryService
	) { }

	ngOnInit(): void {
	}

	onConfirmOder() {
		this.userConfirmOrder.emit(false)
	}

	onCancelOrder() {
		this.router.navigate([`/delivery`]);
	}
}

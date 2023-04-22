import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-instrucctions',
  templateUrl: './instrucctions.component.html',
  styleUrls: ['./instrucctions.component.scss']
})
export class InstrucctionsComponent {

	orderId$ = this.deliveryService.getOrderId$();

	constructor(
		private router: Router,
		private deliveryService : DeliveryService
	) { }

	onKeepBuying() {
		this.router.navigate([`/catalog/products`]);
	}
}

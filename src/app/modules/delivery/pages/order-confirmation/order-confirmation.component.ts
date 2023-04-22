import { Component } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
	displayResumeOrder: boolean = true;

	onConfirmOder(event: boolean) {
		console.log(event)
		this.displayResumeOrder = false;
	}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-order',
  templateUrl: './resume-order.component.html',
  styleUrls: ['./resume-order.component.scss']
})
export class ResumeOrderComponent {

	@Output() userConfirmOrder = new EventEmitter<boolean>();

	constructor(private router: Router) { }

	onConfirmOder() {
		this.userConfirmOrder.emit(false)
	}

	onCancelOrder() {
		this.router.navigate([`/delivery`]);
	}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-delivery-form',
	templateUrl: './delivery-form.component.html',
	styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {
	deliveryForm: FormGroup;
	currentDate = new Date();


	constructor() { }

	ngOnInit(): void {
		this.deliveryForm = new FormGroup({
			'customerName': new FormControl(null, Validators.required),
			'customerPhone': new FormControl(null, Validators.required),
			'deliveryDate': new FormControl(null, Validators.required)
		})


		const maxDate = this.currentDate.toISOString().slice(0, 10);
		this.deliveryForm.get('deliveryDate').setValidators([
			Validators.required,
			Validators.max(new Date(maxDate).getTime())
		]);


		this.currentDate.setDate(this.currentDate.getDate() + 2);

		const minDate = this.currentDate.toISOString().slice(0, 10);
		this.deliveryForm.get('deliveryDate').setValidators([
			Validators.required,
			Validators.min(new Date(minDate).getTime())
		])

		this.deliveryForm.get('deliveryDate').updateValueAndValidity();


	}

	onSubmit() {

	}
}

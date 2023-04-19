import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-delivery-form',
	templateUrl: './delivery-form.component.html',
	styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {

	deliveryForm: FormGroup;

	// * Set min Date on input:date
	currentDate = new Date();
	year = this.currentDate.getFullYear();
	month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
	day = String(this.currentDate.getDate() + 2).padStart(2, '0');
	minDate = `${this.year}-${this.month}-${this.day}`;

	// * Shipping Type select
	shippingType: string = '';

	constructor() { }

	ngOnInit(): void {
		this.deliveryForm = new FormGroup({
			'customerName': new FormControl(null, Validators.required),
			'customerPhone': new FormControl(null, [
				Validators.required,
				Validators.pattern('[0-9]{10}')
			]),
			'deliveryDate': new FormControl(null, Validators.required),
			'shippingType': new FormControl(null, Validators.required),
			'customerAddress': new FormControl(null),
			'postalCode': new FormControl(null),
		})
	}

	validateNumericInput(event: any) {
		const input = event.target as HTMLInputElement;
		const numericValue = input.value.replace(/[^0-9]/g, '');
		input.value = numericValue;
	}

	onShippingTypeChange(event: any) {
		this.shippingType = event.target.value;

		const customerAddressFormControl = this.deliveryForm.get('customerAddress');
		const postalCodeFormControl = this.deliveryForm.get('postalCode');

		if (this.shippingType === 'shipping') {
			// Si se selecciona 'Envío a domicilio'
			customerAddressFormControl.setValidators([Validators.required]);
			postalCodeFormControl.setValidators([
				Validators.required,
				Validators.pattern(/^[1-9]+[0-9]*$/),
				Validators.minLength(6)
			]);
		} else {
			// Si se selecciona 'Recoger en Tienda 3 Bazar'
			customerAddressFormControl.setValidators(null);
			postalCodeFormControl.setValidators(null);
		}

		customerAddressFormControl.updateValueAndValidity();
		postalCodeFormControl.updateValueAndValidity();
	}

	onSubmit() {
		console.log(this.deliveryForm.value)
	}
}

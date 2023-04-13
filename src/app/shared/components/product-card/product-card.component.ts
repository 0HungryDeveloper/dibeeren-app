import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

	@Input() image: string;
	@Input() productName: string;
	@Input() price: string;
	@Input() productID: string;

	constructor(private router: Router) { }

	ngOnInit(): void {

	}

	navigateProductView(productID: string): void {
		this.router.navigate([`catalog/${productID}/product`])
	}
}

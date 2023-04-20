import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	listCart$ = this.cartService.cart$;

	constructor(
		private cartService: CartService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	getSubtotal() {
		return this.cartService.getSubtotalProducts();
	}

	onConfirmOrder() {
		this.router.navigate(['/delivery']);
	}
}

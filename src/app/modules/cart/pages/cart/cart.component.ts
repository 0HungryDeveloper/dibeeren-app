import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	listCart$ = this.cartService.cart$;

	listCart: ICartProduct[] = [
		{
			productName: "Prueba 1",
			price: 99.99,
			image: `https://firebasestorage.googleapis.com/v0/b/dibeeren-9d539.appspot.com/o/products%2Fdummy_product.png?alt=media&token=8dc0d1b3-ad73-473d-b062-b047a2e1fcc3`,
			colorName: `Blanco`,
			quantity: 10,
		},
		{
			productName: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam repellat nisi, id dolorum fugit voluptatem.",
			price: 99.99,
			image: `https://firebasestorage.googleapis.com/v0/b/dibeeren-9d539.appspot.com/o/products%2Fdummy_product.png?alt=media&token=8dc0d1b3-ad73-473d-b062-b047a2e1fcc3`,
			colorName: null,
			quantity: 10,
		},
		{
			productName: "Prueba 3",
			price: 99.99,
			image: `https://firebasestorage.googleapis.com/v0/b/dibeeren-9d539.appspot.com/o/products%2Fdummy_product.png?alt=media&token=8dc0d1b3-ad73-473d-b062-b047a2e1fcc3`,
			colorName: `Blanco`,
			quantity: null
		},
		{
			productName: "Prueba 4",
			price: 99.99,
			image: `https://firebasestorage.googleapis.com/v0/b/dibeeren-9d539.appspot.com/o/products%2Fdummy_product.png?alt=media&token=8dc0d1b3-ad73-473d-b062-b047a2e1fcc3`,
			colorName: null,
			quantity: null
		},
	];

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
	}

	getSubtotal() {
		return this.cartService.getSubtotalProducts();
	}

}

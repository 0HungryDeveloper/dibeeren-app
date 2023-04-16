import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	private cartList: ICartProduct[] = [];

	private shoppingCart = new BehaviorSubject<ICartProduct[]>([]);

	cart$ = this.shoppingCart.asObservable();

	constructor() { }

	addProduct(product: ICartProduct) {
		this.cartList.push(product);
		this.shoppingCart.next(this.cartList);
	}

	deleteProduct(index: number) {
		this.cartList.splice(index, 1);
		this.shoppingCart.next(this.cartList);
	}

	getSubtotalProducts() :number{
		return this.cartList.reduce((subtotal, product) => subtotal + product.price, 0);
	}
}

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
}

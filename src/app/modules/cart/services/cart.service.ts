import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/data/interfaces/iproduct';

@Injectable({
	providedIn: 'root'
})
export class CartService {

	private cartList: IProduct[] = [];

	private shoppingCart = new BehaviorSubject<IProduct[]>([]);

	cart$ = this.shoppingCart.asObservable();

	constructor() { }

	addProduct(product: IProduct) {
		this.cartList.push(product);
		this.shoppingCart.next(this.cartList);
	}
}

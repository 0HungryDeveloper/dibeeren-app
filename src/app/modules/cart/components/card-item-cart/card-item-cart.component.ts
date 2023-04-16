import { Component, Input, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card-item-cart',
  templateUrl: './card-item-cart.component.html',
  styleUrls: ['./card-item-cart.component.scss']
})
export class CardItemCartComponent {

	@Input() productOrder: ICartProduct;
	@Input() indexItem: number;

	constructor(private cartService: CartService) { }


	onDeleteProduct(index: number) {
		this.cartService.deleteProduct(index);
	}
}

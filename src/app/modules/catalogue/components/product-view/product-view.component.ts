import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/data/interfaces/iproduct';
import { CartService } from 'src/app/modules/cart/services/cart.service';

@Component({
	selector: 'app-product-view',
	templateUrl: './product-view.component.html',
	styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

	idProduct: string = '';
	isLoading: boolean;
	product: IProduct = null;
	colorsLength: number;
	quantitiesLength: number;
	productImage: string = '';

	productHasColors: boolean;
	productHasQuantities: boolean;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private cartService: CartService
	) {
		this.isLoading = true;
		this.colorsLength = 0;
		this.quantitiesLength = 0;
	}

	async ngOnInit(): Promise<void> {
		this.route.params.subscribe((params: Params) => {
			this.idProduct = params['id'];
		});

		this.isLoading;
		const product = await firstValueFrom(
			this.productService.onFetchProductById(this.idProduct)
		);
		this.product = product;
		this.productImage = this.product.image;

		this.productHasColors = product.colors.length !== 0;
		this.productHasQuantities = product.quantities.length !== 0;

		this.isLoading = !this.isLoading;
	}

	/**
	 * Change image in product view.
	 * @param imageURL Image displayed by pressing a colored button.
	 */
	onSelectedColor(imageURL: string) {
		this.productImage = imageURL;
	}

	addToCart(product: IProduct) {
		return this.cartService.addProduct(product);
	}
}

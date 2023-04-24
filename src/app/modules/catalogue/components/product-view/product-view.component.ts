import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { Color, IProduct } from 'src/app/data/interfaces/iproduct';
import { CartService } from 'src/app/modules/cart/services/cart.service';
import { ICartProduct } from 'src/app/data/interfaces/icartproduct';

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

	colorSelected: string = null;
	selectedQuantity: number = null;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService,
		private cartService: CartService,
		private router: Router
	) {
		this.isLoading = true;
		this.colorsLength = 0;
		this.quantitiesLength = 0;
	}

	async ngOnInit(): Promise<void> {
		// Get the product ID to retrieve the information and display it in the view.
		this.route.params.subscribe((params: Params) => {
			this.idProduct = params['id'];
		});

		// Loading the information
		this.isLoading;
		const product = await firstValueFrom(
			this.productService.onFetchProductById(this.idProduct)
		);
		this.product = product;

		if (!this.product.availability) {
			this.router.navigate([`/catalog/products`]);
		} else {
			this.productImage = this.product.image;

			this.productHasColors = product.colors.length !== 0;
			this.productHasQuantities = product.quantities.length !== 0;

			if (this.productHasColors) {
				this.productImage = this.product.colors[0].colorImage;
				this.colorSelected = this.product.colors[0].colorName;
			}

			if (this.productHasQuantities) {
				this.selectedQuantity = this.product.quantities[0].quantities;
				this.product.price = this.product.quantities[0].price;
			}

			// The information is recovered
			this.isLoading = !this.isLoading;
		}
	}

	/**
	 * Detect quantity change and update price.
	 */
	onSelectQuantity() {
		const getNewProductPrice = this.product.quantities.find(
			quantity => quantity.quantities === this.selectedQuantity
		);

		if (getNewProductPrice) {
			this.product.price = getNewProductPrice.price;
		}
	}

	/**
	 * Change image in product view.
	 * @param imageURL Image displayed by pressing a colored button.
	 */
	onSelectedColor(color: Color) {
		this.productImage = color.colorImage;
		this.colorSelected = color.colorName;
	}

	/**
	 * Add a product to the cart.
	 * @param product Product to add.
	 * @returns Add the product to the cart list.
	 */
	addToCart(product: IProduct) {
		const abstractProduct: ICartProduct = this.getProductInformation(product);
		console.table(abstractProduct);

		return this.cartService.addProduct(abstractProduct);
	}

	/**
	 * Abstract the information needed to add the product to the cart list.
	 * @param product Product to be added to cart
	 * @returns The important information of the Product object.
	 */
	getProductInformation(product: IProduct): ICartProduct {
		const cartProduct: ICartProduct = {
			productName: product.productName,
			image: product.image,
			price: product.price,
			colorName: this.colorSelected,
			quantity: this.selectedQuantity
		};
		return cartProduct;
	}
}

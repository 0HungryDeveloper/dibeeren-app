import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { firstValueFrom } from 'rxjs';
import { IProduct } from 'src/app/data/interfaces/iproduct';

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

	productHasColors: boolean;
	productHasQuantities: boolean;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService
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

		this.productHasColors = product.colors.length !== 0;
		this.productHasQuantities = product.quantities.length !== 0;

		this.isLoading = !this.isLoading;
	}
}

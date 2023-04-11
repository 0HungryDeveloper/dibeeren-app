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
	isLoading: boolean = true;
	product: IProduct = null;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService
	) { }

	async ngOnInit(): Promise<void> {
		this.route.params.subscribe((params: Params) => {
			this.idProduct = params['id'];
		});
		this.isLoading;
		const product = await firstValueFrom(this.productService.onFetchProductById(this.idProduct));
		this.product = product;
		console.table(this.product);
		this.isLoading = !this.isLoading;
	}
}

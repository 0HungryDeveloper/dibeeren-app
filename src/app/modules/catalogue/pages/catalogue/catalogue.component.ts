import { Component, OnInit } from '@angular/core';
import { CATEGORY_PRODUCTS } from 'src/app/data/constants/data';
import { IProduct } from 'src/app/data/interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-catalogue',
	templateUrl: './catalogue.component.html',
	styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
	//* Fetch products
	products: IProduct[] = [];

	loadingListProducts:boolean;

	//* Pagination stuff
	page : number = 1;

	// * Category products
	categoryProducts: string[] = CATEGORY_PRODUCTS;

	//* Filters
	productFilter: string = '';
	selectedCategory: string = '';

	constructor (
		private productService: ProductService,
	) { }

	ngOnInit(): void {
		this.onFetchProducts();
	}

	onFetchProducts(): void {
		this.loadingListProducts = true;
		this.productService.onFetchProducts().subscribe(products => {
			this.products = products;
			this.loadingListProducts = false;
		})
	}
}

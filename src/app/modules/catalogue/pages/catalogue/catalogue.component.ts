import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY_PRODUCTS } from 'src/app/data/constants/data';
import { IProduct } from 'src/app/data/interfaces/iproduct';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-catalogue',
	templateUrl: './catalogue.component.html',
	styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

	products: IProduct[] = [];
	loadingListProducts:boolean;
	productFilter: string = '';
	//* Pagination stuff
	page : number = 1;
	numbers = [0,1,2,3,4,5,6,7,8,9,10]
	// * Category products
	categoryProducts: string[] = CATEGORY_PRODUCTS;
	selectedCategory: string = '';

	constructor (
		private productService: ProductService,
		private router: Router
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

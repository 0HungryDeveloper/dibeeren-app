import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/data/interfaces/iproduct';
import { ProductService } from 'src/app/modules/catalogue/services/product.service';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
	products: IProduct[] = [];

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.productService.onFetchProductsToDisplayInHome().subscribe(
			products => this.products = products
		)
	}

}

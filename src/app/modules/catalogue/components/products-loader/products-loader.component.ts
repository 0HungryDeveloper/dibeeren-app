import { Component } from '@angular/core';

@Component({
	selector: 'app-products-loader',
	templateUrl: './products-loader.component.html',
	styleUrls: ['./products-loader.component.scss']
})
export class ProductsLoaderComponent {

	products: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
}

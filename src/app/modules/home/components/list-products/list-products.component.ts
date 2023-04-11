import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-products',
	templateUrl: './list-products.component.html',
	styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
	products: number[] = [1, 2, 3, 4]

	constructor() { }

	ngOnInit(): void {
	}

}

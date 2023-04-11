import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/data/interfaces/iproduct';

@Pipe({
	name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

	transform(products: IProduct[], category: string): IProduct[] {
		if (!category) {
			return products;
		}

		return products.filter(product => product.category === category);
	}

}

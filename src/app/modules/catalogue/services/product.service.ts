import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, orderBy, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/data/interfaces/iproduct';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private firestore: Firestore) { }

	/**
	 * Get all the products availables on Firebase.
	 * @returns The list of all products.
	 */
	onFetchProducts(): Observable<IProduct[]> {
		const productReference = collection(this.firestore, 'products');
		// Agregar where() para filtrar por la propiedad availability
		const filteredQuery = query(productReference, where('availability', '==', true), orderBy('creationProductDate', 'desc'));
		return collectionData(filteredQuery, { idField: 'id' }) as Observable<IProduct[]>;
	}

	/**
	 * Get the information of a single product by ID.
	 * @param id_product Reference of the product.
	 * @returns An object of the product.
	 */
	onFetchProductById(id_product: string): Observable<IProduct> {
		const productReference = doc(this.firestore, `products/${id_product}`);
		return docData(productReference) as Observable<IProduct>
	}
}

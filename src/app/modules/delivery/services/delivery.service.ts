import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICustomer } from 'src/app/data/interfaces/icustomer';
import { IOrder } from 'src/app/data/interfaces/iorder';

@Injectable({
	providedIn: 'root'
})
export class DeliveryService {

	private customer: ICustomer = null;

	private customerInformation$ = new BehaviorSubject<ICustomer>(this.customer);

	constructor(private firestore: Firestore) { }

	getCustomerInformation$() : Observable<ICustomer> {
		return this.customerInformation$.asObservable();
	}

	setCustomerInformation(customer: ICustomer) : void {
		this.customerInformation$.next(customer);
	}

	createOrder(order: IOrder) {
		const newOrder = collection(this.firestore, 'orders');
		return addDoc(newOrder, order);
	}
}

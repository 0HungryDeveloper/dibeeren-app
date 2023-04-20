import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICustomer } from 'src/app/data/interfaces/icustomer';

@Injectable({
	providedIn: 'root'
})
export class DeliveryService {

	private customer: ICustomer = null;

	private customerInformation$ = new BehaviorSubject<ICustomer>(this.customer);

	constructor() { }

	getCustomerInformation$() : Observable<ICustomer> {
		return this.customerInformation$.asObservable();
	}

	setCustomerInformation(customer: ICustomer) : void {
		this.customerInformation$.next(customer);
	}
}

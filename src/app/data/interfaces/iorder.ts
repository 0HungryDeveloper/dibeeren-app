import { ICartProduct } from 'src/app/data/interfaces/icartproduct';
import { ICustomer } from 'src/app/data/interfaces/icustomer';

export interface IOrder {
	id: number;
	orderProducts: ICartProduct[];
	customerInformation: ICustomer;
}

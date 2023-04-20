export interface ICustomer {
	name: string;
	phone: string;
	date: Date;
	shippingType: string;
	customeAddress: string | null;
	postalCode: string | null;
}

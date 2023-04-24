export interface IProduct {
	id?: string;
	productName: string;
	description: string;
	price: number;
	category: string;
	image: string;
	colors?: Color[];
	quantities?: Quantity[];
	availability: boolean;
	creationDate?: number;
}

export interface Color {
	colorImage: string;
	colorName: string;
	colorValue: string;
}

export interface Quantity {
	quantities: number;
	price: number;
}

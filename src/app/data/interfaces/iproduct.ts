export interface IProduct {
	id?: string;
	productName: string;
	description: string;
	price: string;
	category: string;
	image: string;
	colors?: Color[];
	quantities?: number[];
	availability: boolean;
	creationDate?: number;
}

interface Color {
	colorImage: string;
	colorName: string;
	colorValue: string;
}

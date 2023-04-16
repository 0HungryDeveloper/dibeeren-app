export interface IProduct {
	id?: string;
	productName: string;
	description: string;
	price: number;
	category: string;
	image: string;
	colors?: Color[];
	quantities?: number[];
	availability: boolean;
	creationDate?: number;
}

export interface Color {
	colorImage: string;
	colorName: string;
	colorValue: string;
}

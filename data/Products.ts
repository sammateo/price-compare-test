let products: Product[] = [
	{
		name: "Milk",
		prices: [
			{
				supermarket: "Supermart",
				price: 2.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 3.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 2.75,
				currency: "USD",
			},
		],
		category: "Dairy",
		slug: "milk",
	},
	{
		name: "Bread",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 2.15,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.75,
				currency: "USD",
			},
		],
		category: "Bakery",
		slug: "bread",
	},
];

export interface Product {
	name: string;
	prices: Price[];
	category: string;
	slug: string;
}

export interface Price {
	supermarket: string;
	price: number;
	currency: string;
}

interface SupermarketPricingData {
	products: Product[];
}

export default products;

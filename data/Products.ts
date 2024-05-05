let products: Product[] = [
	{
		name: "Milk",
		category: "Dairy",
		slug: "milk",
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
			{
				supermarket: "BulkBargains",
				price: 2.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Bread",
		category: "Bakery",
		slug: "bread",
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
			{
				supermarket: "BulkBargains",
				price: 1.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Eggs",
		category: "Dairy",
		slug: "eggs",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 2.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.85,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 1.75,
				currency: "USD",
			},
		],
	},
	{
		name: "Apples",
		category: "Produce",
		slug: "apples",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.49,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 1.75,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.25,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 1.35,
				currency: "USD",
			},
		],
	},
	{
		name: "Bananas",
		category: "Produce",
		slug: "bananas",
		prices: [
			{
				supermarket: "Supermart",
				price: 0.49,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 0.55,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 0.45,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 0.39,
				currency: "USD",
			},
		],
	},
	{
		name: "Butter",
		category: "Dairy",
		slug: "butter",
		prices: [
			{
				supermarket: "Supermart",
				price: 2.49,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 2.75,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 2.25,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 2.15,
				currency: "USD",
			},
		],
	},
	{
		name: "Oranges",
		category: "Produce",
		slug: "oranges",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 2.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 1.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Yogurt",
		category: "Dairy",
		slug: "yogurt",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.25,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 1.45,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.15,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 1.05,
				currency: "USD",
			},
		],
	},
	{
		name: "Tomatoes",
		category: "Produce",
		slug: "tomatoes",
		prices: [
			{
				supermarket: "Supermart",
				price: 1.79,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 1.99,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 1.59,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 1.49,
				currency: "USD",
			},
		],
	},
	{
		name: "Cereal",
		category: "Breakfast",
		slug: "cereal",
		prices: [
			{
				supermarket: "Supermart",
				price: 3.49,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 3.75,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 3.25,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 2.99,
				currency: "USD",
			},
		],
	},
];

export const categories: Category[] = [
	{
		name: "Dairy",
	},
	{
		name: "Bakery",
	},
	{
		name: "Produce",
	},
	{
		name: "Breakfast",
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
export interface Category {
	name: string;
}

export default products;

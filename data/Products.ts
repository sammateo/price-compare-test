export const supermarkets: Supermarket[] = [
	{
		name: "Supermart",
		icon_id: 1,
	},
	{
		name: "FreshFoods",
		icon_id: 2,
	},
	{
		name: "DiscountGrocery",
		icon_id: 3,
	},
	{
		name: "BulkBargains",
		icon_id: 4,
	},
];

let products: Product[] = [
	{
		name: "Milk",
		category: "Dairy",
		slug: "milk",
		brand: "Farm Fresh",
		description: "Fresh whole milk",
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
		brand: "Artisan Bakers",
		description: "Freshly baked white bread",
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
		brand: "Happy Hen Farms",
		description: "Farm-fresh large eggs",
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
		brand: "Organic Harvest",
		description: "Fresh red apples",
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
		brand: "Tropical Delight",
		description: "Ripe bananas",
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
		brand: "Golden Fields",
		description: "Creamy butter",
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
		brand: "Citrus Delights",
		description: "Juicy oranges",
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
		brand: "Healthy Choice",
		description: "Low-fat yogurt",
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
		brand: "Vine Ripe Farms",
		description: "Fresh vine-ripened tomatoes",
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
		brand: "Morning Crunch",
		description: "Crunchy cereal flakes",
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
	{
		name: "Cheese",
		category: "Dairy",
		slug: "cheese",
		brand: "Artisan Cheese Co.",
		description: "Fine aged cheddar cheese",
		prices: [
			{
				supermarket: "Supermart",
				price: 3.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 4.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 3.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 3.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Chicken",
		category: "Meat",
		slug: "chicken",
		brand: "Farm Fresh Meats",
		description: "Skinless, boneless chicken breast",
		prices: [
			{
				supermarket: "Supermart",
				price: 5.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 6.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 5.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 5.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Ground Beef",
		category: "Meat",
		slug: "ground-beef",
		brand: "Premium Meats",
		description: "Lean ground beef",
		prices: [
			{
				supermarket: "Supermart",
				price: 4.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 5.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 4.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 4.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Pasta",
		category: "Pantry",
		slug: "pasta",
		brand: "Italian Delight",
		description: "Classic spaghetti pasta",
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
				price: 1.15,
				currency: "USD",
			},
		],
	},
	{
		name: "Rice",
		category: "Pantry",
		slug: "rice",
		brand: "Golden Grain",
		description: "Long grain white rice",
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
		name: "Canned Soup",
		category: "Pantry",
		slug: "canned-soup",
		brand: "Homemade Flavors",
		description: "Hearty vegetable soup",
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
		name: "Olive Oil",
		category: "Pantry",
		slug: "olive-oil",
		brand: "Mediterranean Harvest",
		description: "Extra virgin olive oil",
		prices: [
			{
				supermarket: "Supermart",
				price: 4.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 5.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 4.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 4.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Frozen Pizza",
		category: "Frozen",
		slug: "frozen-pizza",
		brand: "Classic Pizzeria",
		description: "Pepperoni frozen pizza",
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
	{
		name: "Ice Cream",
		category: "Frozen",
		slug: "ice-cream",
		brand: "Scoops Galore",
		description: "Vanilla bean ice cream",
		prices: [
			{
				supermarket: "Supermart",
				price: 4.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 5.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 4.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 4.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Frozen Vegetables",
		category: "Frozen",
		slug: "frozen-vegetables",
		brand: "Frosty Fields",
		description: "Mixed frozen vegetables",
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
		name: "Coffee",
		category: "Beverages",
		slug: "coffee",
		brand: "Java Joy",
		description: "Medium roast ground coffee",
		prices: [
			{
				supermarket: "Supermart",
				price: 5.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 6.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 5.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 5.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Soda",
		category: "Beverages",
		slug: "soda",
		brand: "Fizzies",
		description: "Assorted soda flavors",
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
		name: "Tea",
		category: "Beverages",
		slug: "tea",
		brand: "Tranquil Teas",
		description: "Assorted herbal tea",
		prices: [
			{
				supermarket: "Supermart",
				price: 3.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 4.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 3.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 3.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Energy Drinks",
		category: "Beverages",
		slug: "energy-drinks",
		brand: "Power Up",
		description: "Mixed fruit energy drink",
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
		name: "Peanut Butter",
		category: "Pantry",
		slug: "peanut-butter",
		brand: "Nutty Delight",
		description: "Creamy peanut butter",
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
	{
		name: "Granola Bars",
		category: "Snacks",
		slug: "granola-bars",
		brand: "Nature's Trail",
		description: "Assorted granola bars",
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
		name: "Potato Chips",
		category: "Snacks",
		slug: "potato-chips",
		brand: "Crunchy Munch",
		description: "Classic potato chips",
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
		name: "Chocolate",
		category: "Snacks",
		slug: "chocolate",
		brand: "Sweet Treats",
		description: "Assorted chocolate bars",
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
		name: "Dish Soap",
		category: "Household",
		slug: "dish-soap",
		brand: "Clean & Clear",
		description: "Lemon scented dish soap",
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
		name: "Toilet Paper",
		category: "Household",
		slug: "toilet-paper",
		brand: "Soft & Strong",
		description: "Soft toilet paper rolls",
		prices: [
			{
				supermarket: "Supermart",
				price: 5.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 6.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 5.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 5.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Laundry Detergent",
		category: "Household",
		slug: "laundry-detergent",
		brand: "Fresh Clean",
		description: "Scented laundry detergent",
		prices: [
			{
				supermarket: "Supermart",
				price: 8.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 9.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 8.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 8.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Trash Bags",
		category: "Household",
		slug: "trash-bags",
		brand: "Strong Hold",
		description: "Large trash bags",
		prices: [
			{
				supermarket: "Supermart",
				price: 4.99,
				currency: "USD",
			},
			{
				supermarket: "FreshFoods",
				price: 5.25,
				currency: "USD",
			},
			{
				supermarket: "DiscountGrocery",
				price: 4.75,
				currency: "USD",
			},
			{
				supermarket: "BulkBargains",
				price: 4.65,
				currency: "USD",
			},
		],
	},
	{
		name: "Tissues",
		category: "Household",
		slug: "tissues",
		brand: "Gentle Touch",
		description: "Soft facial tissues",
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
	brand?: string;
	description?: string;
}

export interface Price {
	supermarket: string;
	price: number;
	currency: string;
}

export interface Category {
	name: string;
}

export interface Supermarket {
	name: string;
	icon_id: number;
}

export default products;

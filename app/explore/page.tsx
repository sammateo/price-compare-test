import Navbar from "@/components/navbar/Navbar";
import React from "react";
import products, { Product as ProductInterface } from "@/data/Products";
import ExploreCategory from "@/components/category/ExploreCategory";

const getCategories = (products: ProductInterface[]) => {
	const categories = products.map((product) => product.category);
	const uniqueCategories = Array.from(new Set(categories));
	return uniqueCategories;
};

export default function page() {
	const categories: string[] = getCategories(products);
	return (
		<div>
			<Navbar />
			<h2 className="text-2xl font-bold my-2 mx-4">Explore Products</h2>
			<div className="px-4">
				{categories.map((category, index) => (
					<ExploreCategory key={index} category={category} />
				))}
			</div>
		</div>
	);
}

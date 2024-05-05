import React from "react";
import products from "@/data/Products";
import Product from "./Product";
export default function ProductList() {
	return (
		<div className="grid grid-cols-2 gap-4 lg:grid-cols-4 px-4">
			{products.map((product) => (
				<Product
					key={product.name}
					name={product.name}
					prices={product.prices}
					category={product.category}
					slug={product.slug}
				/>
			))}
		</div>
	);
}

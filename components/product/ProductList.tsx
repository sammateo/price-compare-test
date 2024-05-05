import React from "react";
import products from "@/data/Products";
import Product from "./Product";
export default function ProductList() {
	return (
		<div
			id="productlist"
			className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 py-10"
		>
			{products.map((product) => (
				<Product
					key={product.name}
					name={product.name}
					prices={product.prices}
					category={product.category}
					slug={product.slug}
					brand={product.brand}
				/>
			))}
		</div>
	);
}

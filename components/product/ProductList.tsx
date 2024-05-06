import React from "react";
import products from "@/data/Products";
import Product from "./Product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function ProductList() {
	return (
		<div className="px-4 py-10">
			<div className="flex justify-between px-4">
				<h2 className="text-2xl font-bold my-2">Grocery Items</h2>
			</div>
			<div
				id="productlist"
				className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 "
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
		</div>
	);
}

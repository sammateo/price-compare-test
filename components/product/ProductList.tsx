import React from "react";
import products from "@/data/Products";
import { Product as ProductInterface } from "@/data/Products";
import Product from "./Product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getProducts } from "@/lib/postgres";
export default async function ProductList() {
	async function getProductsFromDb() {
		const dbproducts: ProductInterface[] = await getProducts();
		// console.log(dbproducts);
		console.log("success");
		console.log(dbproducts.length);
		// console.log(dbproducts.map((product) => product.prices));
		return dbproducts;
	}
	const dbproducts: ProductInterface[] = await getProductsFromDb();
	return (
		<div className="px-4 py-10">
			<div className="flex justify-between px-4">
				<h2 className="text-2xl font-bold my-2">Grocery Items</h2>
			</div>
			<div
				id="productlist"
				className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 "
			>
				{dbproducts &&
					dbproducts.map((product) => (
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

import React from "react";
import products from "@/data/Products";
import Product from "./Product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function PopularProducts() {
	return (
		<div className="px-4 py-10" id="popularproducts">
			<div className="flex justify-between px-4">
				<h2 className="text-2xl font-bold my-2">Popular Items</h2>
				<Link
					href={"/products"}
					className="w-fit flex items-center gap-x-2"
				>
					See More
					<FaArrowRightLong />
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 ">
				{products.slice(0, 4).map((product) => (
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

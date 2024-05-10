import React from "react";
import products, { Product as ProductInterface } from "@/data/Products";
import Product from "../product/Product";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export const getProductsInCategory = (category: string) => {
	return products.filter((product) => product.category === category);
};
export default function ExploreCategory({ category }: { category: string }) {
	const productsInCategory = getProductsInCategory(category);
	return (
		<div>
			<div className="flex justify-between px-4">
				<h2 className="text-xl font-semibold text-gray-900 sm:text-2xl my-4">
					{category}
				</h2>{" "}
				<Link
					href={`/category/${category}`}
					className="w-fit flex items-center gap-x-2"
				>
					See More
					<FaArrowRightLong />
				</Link>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
				{productsInCategory.slice(0, 4).map((product) => (
					<Product
						key={product.slug}
						name={product.name}
						prices={product.prices}
						category={product.category}
						slug={product.slug}
					/>
				))}
			</div>
		</div>
	);
}

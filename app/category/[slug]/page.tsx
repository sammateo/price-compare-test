import React from "react";
import { getProductsInCategory } from "@/components/category/ExploreCategory";
import Navbar from "@/components/navbar/Navbar";
import Product from "@/components/product/Product";
export default function page({ params }: { params: { slug: string } }) {
	const categoryName = new URLSearchParams(params.slug).keys().next().value;
	const productsInCategory = getProductsInCategory(categoryName);
	// console.log(productsInCategory);

	return (
		<div>
			<Navbar />
			{productsInCategory && productsInCategory.length > 0 ? (
				<div className="px-4">
					<h2 className="text-xl font-semibold text-gray-900 sm:text-2xl my-4">
						{categoryName}
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
						{productsInCategory.map((product) => (
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
			) : (
				<div className="h-[70vh] flex justify-center items-center">
					<p className="">No Products found in category.</p>
				</div>
			)}
		</div>
	);
}

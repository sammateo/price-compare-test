import React from "react";
import products from "@/data/Products";
import { Product as ProductInterface } from "@/data/Products";
import Product from "./Product";
import RelatedProductCard from "./RelatedProductCard";
const getProductsInCategory = (category: string, name: string) => {
	const productsInCategory = products.filter(
		(product) => product.category === category && product.name !== name
	);
	return productsInCategory;
};
export default function RelatedProducts({
	category,
	slug,
	name,
}: ProductInterface) {
	const productsInCategory = getProductsInCategory(category, name);
	return (
		<div>
			{productsInCategory && productsInCategory.length > 0 ? (
				<div>
					<h2 className="text-2xl font-medium">Related Products</h2>
					<div className="flex overflow-x-scroll gap-4 px-4 py-10">
						{productsInCategory.map((product) => (
							<RelatedProductCard
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
			) : (
				<div className="my-5">
					<h2 className=" font-medium text-center">
						No Related Products found.
					</h2>
				</div>
			)}
		</div>
	);
}

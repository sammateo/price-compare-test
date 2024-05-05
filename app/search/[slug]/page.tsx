import React from "react";
import products from "@/data/Products";
import { Product as ProductInterface } from "@/data/Products";
import RightButton from "@/components/ui/RightButton";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";
import Page404 from "@/components/ui/404Page";
import { IoAddCircleOutline, IoShareSocialOutline } from "react-icons/io5";
import Product from "@/components/product/Product";
const getProducts = (sulg: string) => {
	const product = products.filter(
		(p) =>
			p.slug.toLowerCase().includes(sulg.trim().toLowerCase()) ||
			p.name.toLowerCase().includes(sulg.trim().toLowerCase()) ||
			p.category.toLowerCase().includes(sulg.trim().toLowerCase()) ||
			p.brand!.toLowerCase().includes(sulg.trim().toLowerCase()) ||
			p.description!.toLowerCase().includes(sulg.trim().toLowerCase())
	);
	return product;
};
export default function page({ params }: { params: { slug: string } }) {
	const searchResults = getProducts(params.slug);

	return (
		<div>
			<Navbar />
			{searchResults && searchResults.length > 0 ? (
				<div>
					<h1 className="px-4 text-2xl font-bold text-center md:text-left">
						Search Results for {params.slug}
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 px-4 py-10">
						{searchResults.map((product) => (
							<Product
								key={product.name}
								name={product.name}
								prices={product.prices}
								category={product.category}
								slug={product.slug}
							/>
						))}
					</div>
				</div>
			) : (
				<div className=" h-[80vh] flex flex-col justify-center items-center gap-y-4">
					<h1 className="text-center text-2xl font-semibold">
						No Items Found That Matched Your Search.
					</h1>
					<Link
						href={"/"}
						className="mx-auto my-5 w-fit flex items-center gap-x-2"
					>
						<FaArrowLeftLong />
						Back to home
					</Link>
				</div>
			)}
		</div>
	);
}

import React from "react";
import products from "@/data/Products";
import { Product as ProductInterface } from "@/data/Products";
import RightButton from "@/components/ui/RightButton";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
const getProduct = (sulg: string) => {
	const product = products.find((p) => p.slug === sulg);
	return product;
};
export default function page({ params }: { params: { slug: string } }) {
	const productData = getProduct(params.slug);
	return (
		<div>
			<Navbar />
			{productData ? (
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-y-4 gap-x-2">
						<div className=" w-10/12 mx-auto">
							<img
								src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
								alt=""
								className="h-64 md:h-full w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
							/>
						</div>
						<div>
							<p className=" text-2xl font-semibold">
								{productData.name}
							</p>
							<div>
								<p className="text-lg font-semibold">
									Compare Prices
								</p>
								<div>
									{productData.prices.map((stores) => (
										<div
											key={stores.supermarket}
											className="grid grid-cols-3 border-b-2 py-2"
										>
											<p>{stores.supermarket}</p>
											<p>
												{stores.price} {stores.currency}
											</p>
											<RightButton />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div>
						<Link
							href={"/"}
							className="mx-auto my-5 w-fit flex items-center gap-x-4"
						>
							<FaArrowLeftLong />
							Back to home
						</Link>
					</div>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

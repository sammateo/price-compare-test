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
import RelatedProducts from "@/components/product/RelatedProducts";
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
						<div className="flex flex-col gap-y-5">
							<div>
								<p className="text-2xl font-semibold">
									{productData.name}
								</p>
								<p className="flex gap-x-2 items-center">
									<span className="bg-blue-600 text-white px-3 py-1.5 text-xs font-medium w-fit">
										{productData.brand}
									</span>
									<span>{productData.description}</span>
								</p>
							</div>

							<img
								src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
								alt=""
								className="object-cover w-full transition duration-500 group-hover:scale-105 "
							/>
							<div className="flex gap-x-4 justify-center">
								<Link
									href={`/product/${params.slug}`}
									className="flex items-center gap-x-2 w-fit rounded p-2 text-sm text-center font-medium transition hover:text-gray-600 mt-4"
								>
									<IoAddCircleOutline /> List
								</Link>
								{/* <Link
									href={`/product/${params.slug}`}
									className="flex items-center gap-x-2 w-fit rounded p-2 text-sm text-center font-medium transition hover:scale-105 mt-4"
								>
									<IoShareSocialOutline /> Share
								</Link> */}
								<Link
									href={`/help`}
									className="flex items-center gap-x-2 w-fit rounded p-2 text-sm text-center font-medium transition hover:scale-105 mt-4"
								>
									<FaRegFlag /> Report
								</Link>
							</div>
						</div>
						<div>
							{/* <p className=" text-2xl font-semibold">
								{productData.name}
							</p> */}
							<div>
								<p className="text-2xl font-semibold">
									Where To Buy
								</p>
								<div>
									{productData.prices
										.sort((a, b) => a.price - b.price)
										.map((stores) => (
											<div
												key={stores.supermarket}
												className="grid grid-cols-3 border-b-2 py-2 items-center"
											>
												<p>{stores.supermarket}</p>
												<p className="mx-auto">
													${stores.price}{" "}
													{/* {stores.currency} */}
												</p>
												<div className="flex justify-end">
													<RightButton />
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
						<div>
							<RelatedProducts
								category={productData.category}
								name={productData.name}
								prices={productData.prices}
								slug={productData.slug}
							/>
						</div>
					</div>
					<div>
						<Link
							href={"/"}
							className="mx-auto my-5 w-fit flex items-center gap-x-2"
						>
							<FaArrowLeftLong />
							Back to home
						</Link>
					</div>
				</div>
			) : (
				<div>
					<Page404 />
				</div>
			)}
		</div>
	);
}

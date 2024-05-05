import React from "react";
import { Product as ProductInterface, Price } from "@/data/Products";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
export default function RelatedProductCard({
	name,
	prices,
	slug,
}: ProductInterface) {
	const avg = (prices: Price[]) => {
		let sum = 0;
		prices.forEach((price) => {
			sum += price.price;
		});
		return sum / prices.length;
	};

	const cheapest = (prices: Price[]) => {
		let min = prices[0].price;
		let minStore = prices[0];
		prices.forEach((price) => {
			if (price.price < min) {
				min = price.price;
				minStore = price;
			}
		});
		return minStore;
	};
	return (
		<div
			// href={`/product/${slug}`}
			className="group relative block overflow-hidden min-w-40"
		>
			<Link href={`/product/${slug}`}>
				<img
					src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
					alt=""
					className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
				/>
			</Link>

			<div className="relative border border-gray-100 bg-white p-6">
				<Link href={`/product/${slug}`}>
					<h3 className="mt-4 text-lg font-medium text-gray-900">
						{name}
					</h3>
				</Link>

				<p className="mt-1.5 text-sm text-gray-700 flex gap-x-2 items-center">
					<span className="whitespace-nowrap bg-blue-600 text-white px-3 py-1.5 text-xs font-medium">
						{" "}
						Avg{" "}
					</span>{" "}
					${avg(prices).toFixed(2)}
				</p>
				{/* <div className="mt-1.5 text-sm text-gray-700">
					<p>{cheapest(prices).supermarket}</p>
					<p>${cheapest(prices).price.toFixed(2)}</p>
				</div> */}

				{/* <div className="flex gap-x-4">
					<Link
						href={`/product/${slug}`}
						className="block w-full rounded bg-blue-400 p-4 text-sm text-center font-medium transition hover:scale-105 mt-4"
					>
						Add to List
					</Link>
				</div> */}
				<div className="flex gap-x-4">
					<Link
						href={`/product/${slug}`}
						className="flex items-center gap-x-2 w-fit rounded text-sm text-center font-medium transition hover:scale-105 mt-4"
					>
						<IoAddCircleOutline /> List
					</Link>
				</div>
			</div>
		</div>
	);
}

import React from "react";
import { Product as ProductInterface, Price } from "@/data/Products";
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import Image from "next/image";
export default function Product({
	name,
	prices,
	slug,
	brand,
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
	const secondCheapest = (prices: Price[]) => {
		const cheapestStore = cheapest(prices);
		let secondCheapest = prices.filter(
			(price) => price.supermarket != cheapestStore.supermarket
		)[0];
		prices.forEach((price) => {
			if (
				price.price < secondCheapest.price &&
				price.price > cheapestStore.price
			) {
				secondCheapest = price;
			}
		});
		return secondCheapest;
	};
	const secondCheapestMessage = (prices: Price[]) => {
		const cheapestStore = cheapest(prices);
		let secondCheapest = prices.filter(
			(price) => price.supermarket != cheapestStore.supermarket
		)[0];
		prices.forEach((price) => {
			if (
				price.price < secondCheapest.price &&
				price.price > cheapestStore.price
			) {
				secondCheapest = price;
			}
		});
		const savedAmount = secondCheapest.price - cheapestStore.price;
		return `Save $${savedAmount.toPrecision(2)} in ${
			cheapestStore.supermarket
		} 
        `;
	};

	return (
		<div className="group relative block overflow-hidden">
			<Link href={`/product/${slug}`}>
				{prices && prices.length > 0 && (
					<div className="absolute end-2 top-4 z-10 rounded-full bg-white bg-opacity-75 px-2 text-gray-900 transition hover:text-gray-900/75 w-fit text-nowrap text-sm">
						<p>
							Save in {cheapest(prices).supermarket} for $
							{cheapest(prices).price.toFixed(2)}
						</p>
						{/* <p>${cheapest(prices).price.toFixed(2)}</p> */}
					</div>
				)}
				{/* {prices && prices.length > 1 && (
					<div className="absolute end-2 top-12 z-10 rounded-full bg-white px-2 text-gray-900 transition text-sm md:text-base font-medium hover:text-gray-900/75">
						<p>{secondCheapestMessage(prices)}</p>
					</div>
				)} */}
				<img
					src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
					alt=""
					className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
				/>
			</Link>

			<div className="relative border border-gray-100 bg-white p-6">
				<p className="text-gray-700 py-1.5 text-xs font-medium w-fit uppercase">
					{brand}
				</p>
				<Link href={`/product/${slug}`}>
					<h3 className="mt-4 text-lg font-medium text-gray-900">
						{name}
					</h3>
				</Link>

				{prices && prices.length > 0 && (
					<p className="mt-1.5 text-sm text-gray-700 flex gap-x-2 items-center">
						<span className="whitespace-nowrap bg-primary text-white px-3 py-1.5 text-xs font-medium">
							{" "}
							Avg{" "}
						</span>{" "}
						${avg(prices).toFixed(2)}
					</p>
				)}
				<div className="flex gap-x-4">
					<Link
						href={`/product/${slug}`}
						className="flex items-center gap-x-2 w-fit rounded text-sm text-center font-medium transition hover:scale-105 mt-4"
					>
						<IoAddCircleOutline /> List
					</Link>
					{/* <Link
						href={`/product/${slug}`}
						className="flex items-center gap-x-2 w-fit rounded p-2 text-sm text-center font-medium transition hover:scale-105 mt-4"
					>
						<IoShareSocialOutline /> Share
					</Link> */}
				</div>
			</div>
		</div>
	);
}

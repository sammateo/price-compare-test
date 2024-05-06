import Navbar from "@/components/navbar/Navbar";
import ProductList from "@/components/product/ProductList";
import React from "react";

export default function page() {
	return (
		<div>
			<Navbar />
			<ProductList />
		</div>
	);
}

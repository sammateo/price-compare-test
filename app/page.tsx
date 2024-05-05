import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import ProductList from "@/components/product/ProductList";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Banner />
			<ProductList />
		</div>
	);
}

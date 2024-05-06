import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import PopularProducts from "@/components/product/PopularProducts";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Banner />
			<PopularProducts />
		</div>
	);
}

import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
export interface navLink {
	name: string;
	href: string;
}
const links: navLink[] = [
	{ name: "Home", href: "/" },
	{ name: "Storage", href: "/category/storage" },
	{ name: "Cables", href: "/category/cables" },
];
export default function Navbar() {
	return (
		<div className="flex py-4 px-4 justify-between items-center">
			<div className="flex gap-x-4 items-center">
				<Link
					href={"/"}
					className="flex items-center gap-x-2 text-xl font-semibold"
				>
					<FaCodeCompare />
					<p>Compare</p>
				</Link>
			</div>

			<div className="flex md:hidden gap-x-4 items-center">
				<FaBars />
			</div>
		</div>
	);
}

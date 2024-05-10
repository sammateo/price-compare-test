"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { categories, Category } from "@/data/Products";
import SearchInput from "../ui/SearchInput";
import { MobileNavbar } from "./MobileNavbar";
import { usePathname } from "next/navigation";
export interface navLink {
	name: string;
	href: string;
}

const links: navLink[] = [
	{ name: "Home", href: "/" },
	{ name: "Explore", href: "/explore" },
	{ name: "Products", href: "/products" },
	{ name: "Feedback", href: "/help" },
];
export default function Navbar() {
	const [openNavbar, setOpenNavBar] = useState(false);
	const pathname = usePathname();

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
			<div className="hidden md:flex gap-x-4 justify-center items-center">
				{links.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={`${
							pathname === link.href
								? " border-b-2 border-blue-600"
								: " border-b-2 border-transparent"
						}`}
					>
						{link.name}
					</Link>
				))}
			</div>
			<div className="hidden md:block">
				<SearchInput />
			</div>
			<div className="flex md:hidden gap-x-4 items-center text-xl cursor-pointer">
				<FaBars onClick={() => setOpenNavBar(true)} />
			</div>
			<MobileNavbar
				openNavbar={openNavbar}
				setOpenNavBar={setOpenNavBar}
				links={links}
			/>
		</div>
	);
}

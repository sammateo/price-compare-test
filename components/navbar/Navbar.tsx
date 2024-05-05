import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
export default function Navbar() {
	return (
		<div className="flex py-4 px-4 justify-between items-center">
			<div className="flex gap-x-4 items-center">
				<Link href={"/"}>Icon</Link>
				<p>Compare</p>
			</div>
			<div className="flex gap-x-4 items-center">
				<p>Icon</p>
				<FaBars />
			</div>
		</div>
	);
}

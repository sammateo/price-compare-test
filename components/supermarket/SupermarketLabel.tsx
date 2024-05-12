import React from "react";
import { supermarkets, Supermarket } from "@/data/Products";
import { LuStore } from "react-icons/lu";
import { FaStore, FaStoreAlt } from "react-icons/fa";
import { MdOutlineStore } from "react-icons/md";
import { MdOutlineDiscount } from "react-icons/md";
import { SiCodefresh } from "react-icons/si";
export default function SupermarketLabel({ name }: { name: string }) {
	const getIconID = (name: string) => {
		return supermarkets.find((supermarket) => supermarket.name === name)
			?.icon_id;
	};
	const iconID = getIconID(name);
	return (
		<div className="flex items-center gap-x-1">
			{iconID == 1 && <FaStore />}
			{iconID == 2 && <SiCodefresh />}
			{iconID == 3 && <MdOutlineDiscount />}
			{iconID == 4 && <LuStore />}
			<p>{name}</p>
		</div>
	);
}

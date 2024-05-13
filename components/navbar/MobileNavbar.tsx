"use client";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { navLink } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchInput from "../ui/SearchInput";

interface NavbarProps {
	openNavbar: boolean;
	setOpenNavBar: any;
	links: navLink[];
}
export function MobileNavbar({
	openNavbar,
	setOpenNavBar,
	links,
}: NavbarProps) {
	const pathname = usePathname();
	return (
		<Sheet open={openNavbar} onOpenChange={setOpenNavBar}>
			<SheetContent className="sm:max-w-lg w-[90vw]">
				<SheetHeader>
					<SheetTitle>Compare</SheetTitle>
				</SheetHeader>

				<nav className="flex flex-col gap-10 mt-4">
					{links.map((link) => (
						<SheetClose asChild key={link.name}>
							<Link
								href={link.href}
								key={link.name}
								className={`text-lg transition duration-200 hover:text-primary ${
									pathname === link.href && "text-primary"
								}`}
							>
								{link.name}
							</Link>
						</SheetClose>
					))}
					<SearchInput />
				</nav>
			</SheetContent>
		</Sheet>
	);
}

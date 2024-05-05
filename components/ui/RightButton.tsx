import React from "react";

export default function RightButton() {
	return (
		<a
			className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-4 py-2 text-white focus:outline-none focus:ring active:bg-indigo-500 w-fit"
			href="#"
		>
			<span className="absolute -end-full transition-all group-hover:end-1">
				<svg
					className="size-5 rtl:rotate-180"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</span>

			<span className="text-sm font-medium transition-all group-hover:me-2">
				{" "}
				Visit{" "}
			</span>
		</a>
	);
}

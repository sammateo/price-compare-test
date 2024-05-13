import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ui/ScrollToTop";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Compare",
	description: "Save Money.  ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ScrollToTopButton />
			</body>
			<GoogleAnalytics
				gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID || ""}
			/>
		</html>
	);
}

import { Poppins } from "next/font/google";

import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const poppins = Poppins({
	weight: ["200", "400", "600", "800"],
	subsets: ["latin"],
	display: "swap",
});
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}

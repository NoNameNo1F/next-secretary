import { Header } from "@/components";
import React from "react";

const HomeLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="fluid-container">
			<Header />
			<div>{children}</div>;
		</div>
	);
};

export default HomeLayout;

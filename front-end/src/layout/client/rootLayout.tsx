import React from "react";
import { Outlet } from "react-router-dom";

import { ScrollRestoration } from "react-router-dom";
import Sidebar from "../../components/commons/Sidebar";
const RootLayout: React.FC = () => {
	return (
		<>
			<Sidebar />
			<Outlet />
			<ScrollRestoration />
		</>
	);
};

export default RootLayout;

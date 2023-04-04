import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const SharedLayout = () => {
	return (
		<div className="font-roboto  ">
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default SharedLayout;

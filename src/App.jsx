import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SharedLayout from "./Pages/SharedLayout";

import FaleConosco from "./Pages/FaleConosco";

import ScrollToTop from "./helpers/ScrollToTop";
import Error from "./Pages/Error";
const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/faleconosco" element={<FaleConosco />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;

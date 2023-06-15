import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/home-logo.png";
import { BsFillLightbulbFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);
	return null;
};

const Navbar = () => {
	const [color, setColor] = useState(false);
	const [showLinks, setShowLinks] = useState(false);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};

	return (
		<div
			className={
				color || showLinks
					? "container mx-auto  max-w-full fixed bg-ice z-20 dark:bg-black  ease-in-out duration-500"
					: "container mx-auto max-w-full fixed bg-ice/60 z-20 dark:bg-black/50 "
			}>
			<div className="flex items-center justify-between select-none">
				<NavLink to="/" onClick={ScrollToTop}>
					<img
						src={logo}
						alt="akropolis home logo"
						className="h-[80px] w-[80px] md:h-[90px] md:w-[100px] ml-2 md:ml-4 "
					/>
				</NavLink>
				<div className="hidden lg:flex space-x-16 pr-[30px] text-sm font-semibold tracking-widest dark:font-bold">
					<NavLink to="/" className="link dark:text-darkIce/40">
						HOME
					</NavLink>

					<NavLink to="/faleconosco" className="link dark:text-darkIce/40">
						FALE CONOSCO
					</NavLink>
					<a
						className="link dark:text-darkIce/40"
						href="https://wa.me/558330311058"
						target="_blank"
						rel="noopener noreferrer">
						RESERVAS
					</a>
					{theme === "light" ? (
						<button onClick={handleThemeSwitch}>
							<MdDarkMode size={15} />
						</button>
					) : (
						<button className="text-darkIce" onClick={handleThemeSwitch}>
							<BsFillLightbulbFill size={15} />
						</button>
					)}
				</div>
				{/* Hamburger Icon  */}
				{showLinks ? (
					<button
						className="ml-auto mr-3 open block hamburger lg:hidden focus:outline-none"
						onClick={toggleLinks}>
						<span className="open dark:bg-darkBlue hamburger-top"></span>
						<span className="open dark:bg-darkBlue hamburger-middle"></span>
						<span className="open dark:bg-darkBlue hamburger-bottom"></span>
					</button>
				) : (
					<button
						className="block mr-3 hamburger lg:hidden focus:outline-none"
						onClick={toggleLinks}>
						<span className="dark:bg-darkBlue hamburger-top"></span>
						<span className="dark:bg-darkBlue hamburger-middle"></span>
						<span className="dark:bg-darkBlue hamburger-bottom"></span>
					</button>
				)}

				{/*  Mobile Menu  */}
				{showLinks ? (
					<div className="lg:hidden">
						<div className="fixed flex flex-col items-center justify-center w-screen h-screen mt-8 space-y-12 font-bold bg-darkIce left-0 drop-shadow-md group dark:text-ice dark:bg-darkGray z-30 ease-in-out duration-500">
							{theme === "light" ? (
								<button onClick={handleThemeSwitch}>
									<MdDarkMode size={15} />
								</button>
							) : (
								<button onClick={handleThemeSwitch}>
									<BsFillLightbulbFill size={15} />
								</button>
							)}
							<NavLink
								onClick={showLinks}
								to="/"
								className="tracking-widest link dark:text-ice/80">
								HOME
							</NavLink>

							<NavLink
								onClick={showLinks}
								to="/faleconosco"
								className="tracking-widest link dark:text-ice/80">
								FALE CONOSCO
							</NavLink>
							<a
								className="tracking-widest link dark:text-ice/80 "
								href="https://wa.me/558330311058"
								target="_blank"
								rel="noopener noreferrer">
								RESERVAS
							</a>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Navbar;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";

import logo from "/images/home-logo.png";

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);
	return null;
};

const Footer = () => {
	return (
		<div>
			{/* <!-- Footer --> */}
			<footer className="bg-ice dark:bg-black h-full">
				{/* <!-- Flex Container --> */}
				<div className=" flex flex-col-reverse justify-between px-6 py-6 mx-auto space-y-8 lg:flex-row lg:px-32 lg:space-y-0 tracking-wider font-semibold lg:py-0">
					{/* <!-- Logo and social links container --> */}
					<div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-row lg:space-y-3 lg:items-start">
						<div className="mx-auto my-6 text-center text-darkBlue lg:hidden">
							Akropolis Home Service LTDA 2023
						</div>
						{/* <!-- Logo --> */}
						<a href="#" onClick={ScrollToTop}>
							<img
								src={logo}
								className="h-[100px] w-[100px] lg:h-[100px] lg:w-[100px]  dark:hover:opacity-90"
								alt=""
							/>
						</a>
						{/* <!-- Social Links Container --> */}
						<div className="flex items-center justify-center mx-auto flex-row gap-2 lg:pt-10 lg:ml-8 ">
							{/* <!-- Link 1 --> */}
							<a
								href="https://wa.me/558330311058"
								target="_blank"
								rel="noopener noreferrer">
								<MdOutlineWhatsapp className="text-darkBlue text-3xl hover:text-darkBlue/80  dark:hover:text-darkIce/90" />
							</a>
							{/* <!-- Link 2 --> */}
							<a
								href="mailto:contato@akropolishomeservice.com.br"
								target="_blank"
								rel="noopener noreferrer">
								<MdOutlineMailOutline className="text-darkBlue text-3xl  hover:text-darkBlue/80  dark:hover:text-darkIce/90" />
							</a>
						</div>
					</div>
					{/* <!-- List Container --> */}
					<div className="flex justify-around space-x-32">
						<div className="flex flex-col space-y-2 text-center text-lg text-ice/70 lg:flex-row lg:space-y-0 lg:items-center lg:justify-center lg:gap-8">
							<Link
								to="/"
								onClick={ScrollToTop}
								className="footer-link dark:hover:text-darkIce/90">
								Home
							</Link>

							<Link
								to="/faleconosco"
								className="footer-link dark:hover:text-darkIce/90">
								Fale Conosco
							</Link>
							<a
								className="footer-link dark:hover:text-darkIce/90"
								href="https://wa.me/558330311058"
								target="_blank"
								rel="noopener noreferrer">
								Reservas
							</a>
						</div>
					</div>
					<a
						className="whatsapp_float"
						href="https://wa.me/558330311058"
						target="_blank"
						rel="noopener noreferrer">
						<MdOutlineWhatsapp className="whatsapp-icon mx-auto" />
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

import React, { useState } from "react";
import cb from "/images/cb-aereo.jpg";

const Hero = () => {
	const [address, setAddress] = useState(false);
	const changeAddress = () => {
		if (window.scrollY >= 200) {
			setAddress(true);
		} else {
			setAddress(false);
		}
	};
	window.addEventListener("scroll", changeAddress);
	return (
		<div className="w-full h-full flex flex-row overflow-hidden">
			<div className="bg-gradient-to-b from-darkBlue/30 to-black/20  h-screen w-screen relative group dark:bg-gradient-t0-b dark:from-darkBlue/3- dark:to-black/20">
				<h1 className="absolute font-noto font-semibold text-3xl md:text-4xl text-darkIce/80  w-1/2 md:w-[40%]  h-full mx-12 mt-36 md:mt-44  lg:text-5xl z-10 dark:text-darkIce">
					Conforto e bem estar na sua jornada
				</h1>
				<img
					src={cb}
					alt=""
					className="w-full h-full object-cover object-center  mix-blend-overlay"
				/>
				{address ? (
					<h2 className="  bg-darkBlue/50 w-full  absolute uppercase -mt-6 text-xl text-white dark:bg-black/50 dark:text-darkIce/60">
						Av. Cairu, 222 - Cabo Branco - João Pessoa - PB
					</h2>
				) : null}
			</div>
		</div>
	);
};

export default Hero;

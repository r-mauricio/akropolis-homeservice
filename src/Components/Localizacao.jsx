import React from "react";
import mapa from "/images/mapa.png";

const Localizacao = () => {
	return (
		<div className="overflow-hidden px-8 lg:px-16 pb-8 flex flex-col w-full md:flex-row dark:bg-darkBlack">
			<div className="flex flex-col my-8 md:mr-1 md:w-1/2 lg:w-3/5">
				<h1 className=" font-semibold tracking-wider text-center text-2xl py-4 uppercase dark:text-darkIce/70">
					no coração turístico de João Pessoa
				</h1>
				<p className=" pb-8 tracking-widest font-light text-darkGray/80 dark:text-darkIce/50 ">
					Localizado próximo às principais praias da cidade, Cabo Branco e
					Tambaú, além de restaurantes, mercados de artesanto, sorverterias e
					outras comodidades.
				</p>
				<a
					href="https://www.google.com.br/maps/place/Akropolis+Mar+Hotel/@-7.1231337,-34.8280174,17.5z/data=!4m5!3m4!1s0x7acdd2c482084f5:0xb3d1df18e207007b!8m2!3d-7.1229903!4d-34.8259198?shorturl=1"
					target="_blank"
					rel="noopener noreferrer"
					className="flex font-semibold w-48 h-12 items-center justify-center rounded-lg text-md uppercase tracking-widest btn">
					<span>veja no mapa</span>
				</a>
			</div>
			<div className="flex py-4 items-center justify-center md:w-1/2 lg:w-2/5">
				<img
					src={mapa}
					alt="Mapa Cabo Branco"
					className=" h-auto w-auto md:h-full md:w-full rounded-sm "
				/>
			</div>
		</div>
	);
};

export default Localizacao;

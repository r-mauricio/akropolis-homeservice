import React from "react";
import home from "/images/Akrópolis Home.jpg";

const Slide = () => {
	return (
		<div className="overflow-hidden px-8 pt-12 pb-6 flex flex-col items-center justify-center md:flex-row md:px-16 dark:bg-black/90">
			<div className="flex flex-col  md:mb-44 md:w-2/3">
				<h1 className="font-semibold  tracking-wider uppercase text-2xl pb-4 dark:text-darkIce/80 ">
					experiência única
				</h1>
				<p className="font-light   pb-8 tracking-widest md:pt-4 md:pb-0 md:w-5/6 dark:text-darkIce/60">
					Criado em 2012, o Akropolis Mar Hotel, hoje, Akropolis Home, tem como
					objetivo servir ao hóspede/inquilino com conforto e qualidade.
					<br />
					Seja viajando a negócios ou lazer, oferecemos uma experiência
					inesquecível para você e sua família.
					<br />
					Oferecemos o melhor custo-benefício para quem viaja a negócios ou
					lazer ou para quem deseja passar temporada em João Pessoa. Nossas
					instalações apresentam decoração elegante e contemporânea.
				</p>
			</div>
			<div className="md:w-1/3">
				<img
					src={home}
					alt="akropolis home"
					className="object-cover object-bottom w-full h-[400px] rounded md:w-5/6 md:ml-8 dark:opacity-60"
				/>
			</div>
		</div>
	);
};

export default Slide;

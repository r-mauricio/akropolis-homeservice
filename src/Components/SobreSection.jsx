import React, { useState } from "react";
import SliderSobre from "./SliderSobre";
import images from "/public/slides.js";
import FsLightbox from "fslightbox-react";

const SobreSection = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 0,
	});

	const openLightboxOnSlide = (i) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: i,
		});
	};

	return (
		<div>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={[
					"images/vista.jpg",
					"images/terraco.jpg",
					"images/arte.jpg",
					"images/desk.jpg",
					"images/escada.jpg",
					"images/corredor.jpg",
					"images/corredor1.jpg",
					"images/flat2.jpg",
					"images/sala.jpg",
					"images/salasofa.jpg",
					"images/copa.jpg",
					"images/cozinha2.jpg",
					"images/mesa.jpg",
					"images/quarto.jpg",
					"images/quarto1.jpg",
					"images/quarto2.jpg",
					"images/quarto3.jpg",
					"images/cama.jpg",
					"images/camas.jpg",
					"images/camas2.jpg",
					"images/tvarmario.jpg",
					"images/pia.jpg",
					"images/banheiro2.jpg",
					"images/banheiro.jpg",
				]}
				slide={lightboxController.slide}
			/>

			<div className="overflow-hidden bg-veryLightBlue/60  pt-12 pb-6 flex flex-col items-center justify-center md:flex-row dark:bg-black">
				<div className=" w-[80%] md:w-1/2 md:ml-12 lg:ml-20 lg:w-1/3">
					<SliderSobre
						image={images}
						openLightboxOnSlide={openLightboxOnSlide}
					/>
				</div>
				<div className="flex flex-col items-center w-full  mx-8   md:mb-24 lg:mr-16 md:w-1/2  lg:w-2/3">
					<h1 className="font-semibold uppercase tracking-wider text-center text-2xl py-4 dark:text-darkIce/70 ">
						conforto e praticidade
					</h1>
					<p className="font-light pb-6  mx-6 tracking-widest md:pb-4 dark:text-darkIce/50">
						Contamos com 21 apartamentos estilo Flat, com 2 ambientes, os
						quartos tem vista para o mar e com capacidade para acomodar até três
						pessoas; todos equipados para oferecer o máximo conforto. A
						qualidade das instalações, dos equipamentos e dos nossos serviços
						foram as nossas maiores preocupações.
					</p>
					<p className="mx-4 pb-12 text-center tracking-widest md:pb-8 md:mx-0 dark:text-darkIce/60">
						Cada apartamento ainda dispõe de:
					</p>
					<ul className=" flex  flex-col items-start ml-8  md:flex-row font-light md:gap-8 list-[square] tracking-widest md:pb-0 md:mx-4 lg:gap-12 dark:text-darkIce/50">
						<div className="flex flex-col flex-wrap">
							<li>Sofá-Cama</li>
							<li>Frigobar</li>
							<li>Camas Box</li>
						</div>
						<div className="flex flex-col flex-wrap">
							<li>TV local</li>
							<li>Ar Condicionado</li>
							<li>Ramal telefônico</li>
							<li>Chuveiro elétrico</li>
						</div>
						<div className="flex flex-col flex-wrap">
							<li>Armários projetados</li>
							<li>Cozinha americana</li>
							<li>Mesa de apoio com cadeiras</li>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SobreSection;

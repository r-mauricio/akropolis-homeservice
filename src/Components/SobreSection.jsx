import React, { useState } from "react";
import SliderSobre from "./SliderSobre";
import images from "/public/slides.js";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const SobreSection = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
		document.body.classList.add("modal-open");
	};
	const handleClose = () => {
		setOpen(false);
		document.body.classList.remove("modal-open");
	};
	const handleBack = () => {
		setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1);
	};

	const handleForward = () => {
		setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1);
	};
	return (
		<div>
			{open ? (
				<div className="fixed  overflow-y-hidden top-0 left-0 w-full h-full z-50 flex items-center bg-black/90">
					<AiFillCloseCircle
						className="absolute top-5 right-5 text-2xl text-darkIce pointer"
						onClick={() => handleClose()}
					/>
					<FaArrowCircleLeft
						className="m-5 text-darkIce pointer text-2xl "
						onClick={() => handleBack()}
					/>
					<div className="w-full h-full flex justify-center items-center">
						<img
							src={`${images[slideNumber].img}`}
							alt=""
							className="max-w-full max-h-full object-cover object-fit"
						/>
					</div>
					<FaArrowCircleRight
						className="m-5 text-darkIce pointer text-2xl"
						onClick={() => handleForward()}
					/>
				</div>
			) : (
				<div className="overflow-hidden bg-veryLightBlue/60  pt-12 pb-6 flex flex-col items-center justify-center md:flex-row dark:bg-black">
					<div className=" w-[80%] md:w-1/2 md:ml-12 lg:ml-20 lg:w-1/3">
						<SliderSobre image={images} handleOpen={handleOpen} />
					</div>
					<div className="flex flex-col items-center w-full  mx-8   md:mb-24 lg:mr-16 md:w-1/2  lg:w-2/3">
						<h1 className="font-semibold uppercase tracking-wider text-center text-2xl py-4 dark:text-darkIce/70 ">
							conforto e praticidade
						</h1>
						<p className="font-light pb-6  mx-4 tracking-widest md:pb-4 dark:text-darkIce/50">
							Contamos com 21 apartamentos estilo Flat, com 2 ambientes, os
							quartos tem vista para o mar e com capacidade para acomodar até
							três pessoas; todos equipados para oferecer o máximo conforto. A
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
			)}
		</div>
	);
};

export default SobreSection;

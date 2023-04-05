import React from "react";
import bg from "/images/ponta.jpg";
import { MdOutlineMailOutline, MdOutlineWhatsapp } from "react-icons/md";
import ContactForm from "../Components/ContactForm";

const FaleConosco = () => {
	return (
		<div className=" overflow-hidden flex flex-col  w-full h-full pb-8 md:pb-0 md:px-16 md:pt-[101px] dark:bg-darkBlack">
			<div
				className="mx-8 mt-24 md:mt-8 
				">
				<div className=" space-y-4 max-w-max">
					<h1 className="text-redLogo/60 font-bold text-3xl md:tracking-wider md:text-4xl dark:text-darkLightGray/70">
						Fale Conosco
					</h1>
					<h2 className="text-gray-500/80 font-semibold dark:text-darkIce/90 ">
						Entre em contato conosco. Será um prazer atendê-lo.
					</h2>
					<div className=" flex  py-4 items-center  justify-center ">
						<div className="flex flex-col md:flex-col-reverse justify-center items-center  md:relative">
							<div className="w-96 md:ml-96 md:absolute">
								<ContactForm />
							</div>
							<div className="py-8">
								<img
									src={bg}
									alt="Akropolis engenharia"
									className="h-[400px] w-screen  md:h-[600px] md:w-screen rounded-xl   "
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row  flex-wrap gap-8 md:gap-24  md:pt-16 md:pb-16">
						<div className="flex flex-col   pt-4 md:pt-0 ">
							<h2 className="uppercase text-sm font-bold tracking-wider text-gray-700 pb-2 dark:text-darkIce/90">
								Atendimento Online
							</h2>
							<div className="flex flex-row  items-center group">
								<a
									href="https://wa.me/558330311058"
									target="_blank"
									rel="noopener noreferrer">
									<MdOutlineWhatsapp className="inline-block text-gray-400 text-3xl group-hover:text-gray-600 dark:group-hover:text-darkIce/90" />
									<h2 className="inline-block ml-1 text-gray-400 text-md font-bold group-hover:text-gray-600 dark:group-hover:text-darkIce/90">
										+55 83 30311058
									</h2>
								</a>
							</div>
						</div>
						<div className="flex  flex-col">
							<h2 className="uppercase text-sm font-bold tracking-wider text-gray-700 pb-2 dark:text-darkIce/90">
								Atendimento Via E-mail
							</h2>
							<div className="flex   flex-row items-center group">
								<a
									href="mailto:contato@akropolishomeservice.com.br"
									target="_blank"
									rel="noopener noreferrer">
									<MdOutlineMailOutline className="inline-block text-gray-400 text-3xl  hover:text-gray-600 dark:group-hover:text-darkIce/90" />
									<h2 className="inline-block ml-1 text-gray-400 text-md font-bold hover:text-gray-600 dark:group-hover:text-darkIce/90">
										contato@akropolishomeservice.com.br
									</h2>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaleConosco;

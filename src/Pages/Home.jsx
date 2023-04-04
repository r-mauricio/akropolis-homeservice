import React from "react";
import Hero from "../Components/Hero";
import SobreSection from "../Components/SobreSection";
import Localizacao from "../Components/Localizacao";
import Slide from "../Components/Slide";
import Reviews from "../Components/Reviews";
const Home = () => {
	return (
		<>
			<Hero />
			<Slide />
			<SobreSection />
			<Localizacao />
			<Reviews />
		</>
	);
};

export default Home;

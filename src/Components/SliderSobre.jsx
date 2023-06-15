import React from "react";
import images from "/public/slides.js";

const SliderSobre = ({ openLightboxOnSlide }) => {
	return (
		<div className="md:w-full lg:w-5/6">
			<swiper-container
				keyboard="true"
				space-between="5"
				pagination="true"
				pagination-clickable="true"
				pagination-dynamic-bullets="true"
				loop="true">
				{images.map((image, i) => (
					<swiper-slide key={i}>
						<img
							key={i}
							onClick={() => openLightboxOnSlide(i + 1)}
							src={image.img}
							alt="foto"
							className="object-cover object-bottom w-full h-[400px] rounded  hover:opacity-90  dark:opacity-70 dark:hover:opacity-90"
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
};

export default SliderSobre;

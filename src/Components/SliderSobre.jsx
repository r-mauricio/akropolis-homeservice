import React from "react";
import images from "/public/slides.js";

const SliderSobre = ({ handleOpen }) => {
	return (
		<div className="md:w-full lg:w-5/6">
			<swiper-container
				navigation="true"
				keyboard="true"
				space-between="5"
				pagination="true"
				pagination-clickable="true"
				pagination-dynamic-bullets="true"
				loop="true">
				{images.map((image, i) => (
					<swiper-slide>
						<img
							onClick={() => handleOpen(i)}
							key={i * 2}
							src={image.img}
							alt=""
							className="object-cover object-bottom w-full h-[400px] rounded  hover:opacity-90  dark:opacity-70 dark:hover:opacity-90"
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
};

export default SliderSobre;

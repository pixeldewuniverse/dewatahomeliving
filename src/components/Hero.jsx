import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ image, title, subtitle }) => {
  return (
		<section
			className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-cover bg-center"
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className="relative z-10 container-custom text-white">

				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
          className="heading-hero mb-6 font-bold nav-title-stroke"
				>
					{title}
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
					className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/95 font-medium nav-subtitle-stroke"
				>
					{subtitle}
				</motion.p>

			</div>
		</section>
	);
};


export default Hero;
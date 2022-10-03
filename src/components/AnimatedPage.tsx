import React from "react";
import { motion } from "framer-motion";

type Props = {
	children: JSX.Element | JSX.Element[] | undefined;
};

const animations = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

const AnimatedPage = ({ children }: Props) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit={"exit"}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedPage;

import React from "react";
import styles from "../../styles/containers/MainContainer.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	optionClass?: string;
}

const MainContainer: React.FC<Props> = ({ children, optionClass }) => {
	return (
		<div className={`${styles.container} ${optionClass ?? undefined}`}>
			{children}
		</div>
	);
};

export default MainContainer;

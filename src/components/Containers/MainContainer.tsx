import React from "react";
import styles from "../../styles/containers/MainContainer.module.scss";
import ComponentProps from "../../types/ComponentProps";

const MainContainer: React.FC<ComponentProps> = ({ children, optionClass }) => {
	return (
		<div className={`${styles.container} ${optionClass ?? undefined}`}>
			{children}
		</div>
	);
};

MainContainer.defaultProps = {
	optionClass: undefined,
};

export default MainContainer;

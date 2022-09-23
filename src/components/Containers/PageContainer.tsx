import React from "react";

import styles from "../../styles/containers/PageContainer.module.scss";
import ComponentProps from "../../types/ComponentProps";

const PageContainer: React.FC<ComponentProps> = ({ children, optionClass }) => {
	return <div className={`${styles.container} ${optionClass}`}>{children}</div>;
};
PageContainer.defaultProps = {
	optionClass: undefined,
};
export default PageContainer;

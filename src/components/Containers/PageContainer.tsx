import React from "react";

import styles from "../../styles/containers/PageContainer.module.scss";

interface Props {
	children: JSX.Element | JSX.Element[];
	optionClass?: string;
}

const PageContainer: React.FC<Props> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default PageContainer;

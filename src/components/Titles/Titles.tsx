import React from "react";
import styles from "../../styles/titles/Titles.module.scss";
import ComponentProps from "../../types/ComponentProps";

const Title: React.FC<ComponentProps> = ({ children }) => {
	return <div className={styles.title}>{children}</div>;
};

export default Title;

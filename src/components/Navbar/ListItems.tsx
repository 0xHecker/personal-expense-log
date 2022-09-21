import { NavLink } from "react-router-dom";
import React from "react";
import styles from "../../styles/navbar/NavLink.module.scss";
interface Props {
	url: string;
	children: JSX.Element;
	optionClass?: string;
	clickHandler?: React.MouseEventHandler<HTMLLIElement>;
}

const NavBarLink: React.FC<Props> = ({
	url,
	children,
	clickHandler,
	optionClass,
}) => {
	return (
		<li className={styles.listItem} onClick={clickHandler}>
			<NavLink
				to={`/${url}`}
				className={({ isActive }) => (isActive ? styles.active : undefined)}
			>
				{children}
			</NavLink>
		</li>
	);
};

NavBarLink.defaultProps = {
	url: "",
	optionClass: undefined,
};

export default NavBarLink;

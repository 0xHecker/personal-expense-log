import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/navbar/NavBar.module.scss";

import NavBarLink from "./ListItems";

const logoutHandler = () => {};

const NavBar = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link to="/">
						<div>Tracker</div>
					</Link>
				</div>

				<nav>
					<ul>
						<NavBarLink url="">
							<h3>Home</h3>
						</NavBarLink>

						<NavBarLink url="categories">
							<h3>Categories</h3>
						</NavBarLink>

						<NavBarLink url="transactions">
							<h3>Transactions</h3>
						</NavBarLink>

						<NavBarLink url="wallet">
							<h3>Wallet</h3>
						</NavBarLink>

						{/* Profile */}
						<div className={styles.mobileMenuLinks}>
							<NavBarLink url="settings">
								<h3>Settings</h3>
							</NavBarLink>
						</div>
						<NavBarLink url="logout" clickHandler={logoutHandler}>
							<h3>Logout</h3>
						</NavBarLink>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default NavBar;

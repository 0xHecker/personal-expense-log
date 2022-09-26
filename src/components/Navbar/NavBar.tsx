import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import styles from "../../styles/navbar/NavBar.module.scss";

import NavBarLink from "./ListItems";
import { useLogoutUser } from "../../queries/user";
import { queryClient } from "../../constants/config";

// const logoutHandler = () => {};

const NavBar = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const { mutate: logoutHandler, isSuccess } = useLogoutUser();

	useEffect(() => {
		if (isSuccess) {
			queryClient.removeQueries();
			setAuth(false);
			if (!auth) navigate("login");
		}
	}, [auth, isSuccess, navigate, setAuth]);

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

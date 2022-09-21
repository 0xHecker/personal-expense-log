import styles from "../../styles/navbar/MobileNavbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavBarLink from "./ListItems";

const MobileNavbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const closeNav = () => setNavbarOpen(false);
	return (
		<div className={styles.container}>
			<div>
				{/* Bars */}
				<div
					className={`${styles.iconContainer} ${styles.bars}`}
					onClick={() => setNavbarOpen(true)}
				>
					<FaBars />
				</div>

				{/* Nav  */}

				<nav className={navbarOpen ? styles.navActive : undefined}>
					<ul>
						<div
							className={`${styles.iconContainer} ${styles.times}`}
							onClick={() => setNavbarOpen(false)}
						>
							<FaTimes />
						</div>

						{/* HOME */}
						<NavBarLink
							url=""
							optionClass={styles.linkColor}
							clickHandler={closeNav}
						>
							<h3>Home</h3>
						</NavBarLink>

						{/* CATEGORIES */}
						<NavBarLink
							url="categories"
							optionClass={styles.linkColor}
							clickHandler={closeNav}
						>
							<h3>Categories</h3>
						</NavBarLink>

						{/* TRANSACTIONS */}
						<NavBarLink
							url="transactions"
							optionClass={styles.linkColor}
							clickHandler={closeNav}
						>
							<h3>Transactions</h3>
						</NavBarLink>

						{/* Wallet */}
						<NavBarLink
							url="wallet"
							optionClass={styles.linkColor}
							clickHandler={closeNav}
						>
							<h3>Wallet</h3>
						</NavBarLink>

						{/* Profile */}
						<div className={styles.mobileMenuLinks}>
							<NavBarLink
								url="profile"
								optionClass={styles.linkColor}
								clickHandler={closeNav}
							>
								<h3>Profile</h3>
							</NavBarLink>
						</div>

						{/* Settings */}
						<div className={styles.mobileMenuLinks}>
							<NavBarLink
								url="settings"
								optionClass={styles.linkColor}
								clickHandler={closeNav}
							>
								<h3>Settings</h3>
							</NavBarLink>
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileNavbar;

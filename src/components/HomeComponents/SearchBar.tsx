import React from "react";
import styles from "../../styles/homeComponents/Searchbar.module.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.inner}>
				<div className={styles.searchContainer}>
					<FiSearch />
					<input type="text" placeholder="Search" />
				</div>

				<div className={styles.menuLink}>
					<Link to={"settings"}>Settings</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;

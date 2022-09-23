import React from "react";
import styles from "../../styles/cards/CategoryCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

export const CategoryCards: React.FC<{ category: string; money: string }> = ({
	category,
	money,
}) => {
	const categoryStyle = () => {
		switch (category) {
			case "Products":
				return {
					ctg: "Products",
					icon: <FiBox style={{ color: "#fdeacc" }} />,
					background: "#f8aa35",
				};
			case "Entertainment":
				return {
					ctg: "Entertainment",
					icon: <IoGameControllerOutline style={{ color: "#e4f1d5" }} />,
					background: "#92c44c",
				};

			case "Bills":
				return {
					ctg: "Bills",
					icon: <BsHouseDoor style={{ color: "#b7dffd" }} />,
					background: "#5a92d6",
				};
			default:
				return {
					ctg: "Other",
					icon: <HiOutlineFire style={{ color: "#ffbece" }} />,
					background: "#ff6275",
				};
		}
	};

	return (
		<div
			className={styles.container}
			style={{ background: categoryStyle().background }}
		>
			<div className={styles.inner}>
				<div className={styles.iconContainer}>{categoryStyle().icon}</div>
				<div className={styles.info}>
					<div className={styles.title}>{categoryStyle().ctg}</div>
					<div className={styles.money}>{money}</div>
				</div>
			</div>
		</div>
	);
};

CategoryCards.defaultProps = {
	category: "Other",
	money: "10k",
};

export default CategoryCards;

import { BsPencil, BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUser } from "../../queries/user";
import styles from "../../styles/homeComponents/HomeProfile.module.scss";

const HomeProfile = () => {
	const { data } = useUser();

	return (
		<div className={styles.container}>
			<div className={styles.iconContainer}>
				<BsPerson />
			</div>
			<div className={styles.info}>
				<span className={styles.welcome}>
					{data && `Hi ${data?.data.firstName}!`}
				</span>
				<div className={styles.options}>
					<Link to={"profile"}>
						<span>Profile</span>
						<BsPencil />
					</Link>

					<Link to={"settings"}>
						<span>Settings</span>
						<IoSettingsOutline />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeProfile;

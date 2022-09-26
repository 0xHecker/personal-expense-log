import { useState } from "react";
import styles from "../styles/settings/Settings.module.scss";

import Title from "../components/Titles/Titles";
import MainContainer from "../components/Containers/MainContainer";

import { useUserUpdatePassword } from "../queries/user";
import { queryClient } from "../constants/config";

const Settings = () => {
	const {
		mutate: UpdatePassword,
		isError,
		error,
		isLoading,
	} = useUserUpdatePassword();

	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");

	let body = {
		oldPassword,
		newPassword,
	};

	return (
		<MainContainer>
			<Title>Settings</Title>
			<form action="submit" onSubmit={(e) => e.preventDefault()}>
				<div className={styles.container}>
					{/* OLD PW */}
					<div className={styles.password}>
						<label htmlFor="oldPassword">Current Password : </label>
						<input
							type="password"
							name="oldPassword"
							value={oldPassword}
							autoComplete="current-password"
							onChange={(e) => setOldPassword(e.target.value)}
						/>
					</div>
					<div className={styles.password}>
						{/* NEW PW */}
						<label htmlFor="newPassword">New Password : </label>
						<input
							type="password"
							name="newPassword"
							autoComplete="new-password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
						/>
					</div>
					<button
						onClick={() =>
							UpdatePassword(body, {
								onSuccess: () => {
									queryClient.invalidateQueries("user");
									queryClient.removeQueries();
								},
							})
						}
					>
						{isLoading ? "Loading" : "Change Password"}
					</button>
				</div>
				{isError && (
					<div style={{ marginTop: "1rem", color: "red" }}>
						{/* @ts-ignore */}
						{error.response.data}
					</div>
				)}
			</form>
		</MainContainer>
	);
};

export default Settings;

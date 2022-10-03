import MainContainer from "../components/Containers/MainContainer";
import Title from "../components/Titles/Titles";
import { useUser, useUserUpdate } from "../queries/user";
import styles from "../styles/profileComponents/Profile.module.scss";
import { useState, useEffect } from "react";

const Profile = () => {
	const { data: user, isSuccess } = useUser();
	const {
		mutate: userUpdate,
		isSuccess: userUpdated,
		isError: userNotUpdated,
		isLoading: userUpdating,
	} = useUserUpdate();

	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");

	useEffect(() => {
		if (isSuccess) {
			try {
				setFirstname(user.data.firstName);
				setLastname(user.data.LastName);
			} catch {}
		}
	}, [isSuccess, user?.data.LastName, user?.data.firstName]);

	const body = {
		firstName,
		lastName,
	};

	return (
		<MainContainer>
			<div className={styles.container}>
				<Title>Profile</Title>
				<form action="submit" onSubmit={(e) => e.preventDefault()}>
					<div className={styles.formInner}>
						{/* FIRSTNAME */}
						<div className={styles.firstName}>
							<label htmlFor="firstName">First Name :</label>
							<input
								type="text"
								name="firstName"
								value={firstName}
								onChange={(e) => setFirstname(e.target.value)}
							/>
						</div>
						{/* LASTNAME */}
						<div className={styles.lastName}>
							<label htmlFor="lastName">Last Name : </label>
							<input
								type="text"
								name="lastName"
								value={lastName}
								onChange={(e) => setLastname(e.target.value)}
							/>
						</div>
						{/* BUTTON */}
						<button onClick={() => userUpdate(body)} disabled={userUpdating}>
							{userUpdating ? "Updating..." : "Update Info!"}
						</button>
						{userUpdated && (
							<div style={{ marginTop: "1rem", color: "green" }}>Success</div>
						)}
						{userNotUpdated && (
							<div style={{ marginTop: "1rem", color: "red" }}>Error</div>
						)}
					</div>
				</form>
				{/* <button
					onClick={() =>
						UserDelete(null, {
							onSuccess: () => {
								queryClient.removeQueries();
								queryClient.cancelQueries();
								queryClient.cancelMutations();
								nav("/auth");
							},
						})
					}
					disabled={userDeleting}
					style={{ marginTop: "1rem" }}
				>
					{userDeleting ? "Deleting..." : "Delete Account"}
				</button> */}
			</div>
		</MainContainer>
	);
};

export default Profile;

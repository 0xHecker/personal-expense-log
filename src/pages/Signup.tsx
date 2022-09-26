import React, { useContext, useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import Title from "../components/Titles/Titles";
import { AuthContext } from "../context/AuthProvider";
import { useLoginUser, useRegisterUser } from "../queries/user";
import styles from "../styles/authComponents/Auth.module.scss";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { auth, setAuth } = useContext(AuthContext);

	const {
		mutate: loginHandler,
		isError: loginError,
		error: loginErr,
	} = useLoginUser();

	let body = {
		email,
		password,
	};

	const {
		mutateAsync: registerHandler,
		isSuccess: registerSucc,
		isError: registerError,
		error: registerErr,
	} = useRegisterUser();

	return (
		<MainContainer>
			<form
				action="submit"
				onSubmit={(e) => e.preventDefault()}
				className={styles.registerForm}
			>
				<div className={styles.container}>
					<Title>
						<h3>Signup</h3>
					</Title>
					<span>Email :</span>
					<input
						type={"email"}
						autoComplete={"username"}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<span>Password :</span>
					<input
						type={"password"}
						autoComplete={"password"}
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<button
						onClick={() =>
							registerHandler(body, {
								onSuccess: () => {
									loginHandler(body, {
										onSuccess: () => setAuth(true),
										onError: () => {
											console.log(registerErr);
										},
									});
								},
							})
						}
					>
						Signup
					</button>
				</div>
			</form>
		</MainContainer>
	);
};

export default Signup;

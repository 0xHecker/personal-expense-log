import React, { useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import Title from "../components/Titles/Titles";
import styles from "../styles/authComponents/Auth.module.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<MainContainer>
			<form action="submit" onSubmit={(e) => e.preventDefault()}>
				<div className={styles.container}>
					<Title>
						<h3>Login</h3>
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
					{/* Login button */}
					<button>Login</button>
				</div>
			</form>
		</MainContainer>
	);
};

export default Login;

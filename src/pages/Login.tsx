import React, { useContext, useEffect, useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import Title from "../components/Titles/Titles";
import styles from "../styles/authComponents/Auth.module.scss";
import { useLoginUser } from "../queries/user";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { auth, setAuth } = useContext(AuthContext);

	let body = {
		email,
		password,
	};

	const {
		mutate: loginHandler,
		isError: loginError,
		error: loginErr,
	} = useLoginUser();

	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate("/");
		}
	}, [auth, navigate]);

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
					<button
						onClick={() =>
							loginHandler(body, {
								onError: () => {
									console.log(loginErr);
								},
								onSuccess: () => setAuth(true),
							})
						}
					>
						Login
					</button>
					<div
						style={{ padding: 15, fontWeight: "bold", letterSpacing: "0.5px" }}
					>
						<Link to={"/signup"}> Register</Link>
					</div>
				</div>
			</form>
		</MainContainer>
	);
};

export default Login;

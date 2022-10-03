import React, { useContext, useEffect, useState } from "react";
import MainContainer from "../components/Containers/MainContainer";
import Title from "../components/Titles/Titles";
import { AuthContext } from "../context/AuthProvider";
import { useLoginUser, useRegisterUser } from "../queries/user";
import styles from "../styles/authComponents/Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		mutate: loginHandler,
		isError: loginError,
		error: loginErr,
	} = useLoginUser();

	let body = {
		firstName,
		email,
		password,
	};

	const {
		mutateAsync: registerHandler,
		isSuccess: registerSucc,
		isError: registerError,
		error: registerErr,
		isLoading,
	} = useRegisterUser();

	useEffect(() => {
		if (auth) {
			navigate("/");
		}
	}, [auth, navigate]);

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
					<span>Name :</span>
					<input
						type={"text"}
						autoComplete={"Name"}
						onChange={(e) => setFirstName(e.target.value)}
					></input>
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
					<div
						style={{ padding: 15, fontWeight: "bold", letterSpacing: "0.5px" }}
					>
						<Link to={"/login"}>Login instead</Link>
					</div>
				</div>
			</form>
		</MainContainer>
	);
};

export default Signup;

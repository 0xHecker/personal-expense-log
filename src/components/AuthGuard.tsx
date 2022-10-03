import React, { useEffect } from "react";
import { useUser } from "../queries/user";
import { queryClient } from "../constants/config";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

interface AuthProps {
	children: JSX.Element | JSX.Element[] | undefined;
}

const AuthGuard: React.FC<AuthProps> = ({ children }) => {
	const {
		data: user,
		isLoading: userLoading,
		isRefetching: userRefetching,
	} = useUser();

	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (user?.data?.userId) {
			if (pathname === "/login" || pathname === "/signup") {
				navigate("/");
			} else navigate(pathname);
		}

		if (!userLoading && !user?.data && !userRefetching) {
			if (pathname === "/signup") {
				navigate("/signup");
				return;
			}
			if (pathname !== "/login" && pathname !== "/signup") {
				queryClient.removeQueries();
				navigate("/login");
				return;
			}
			return;
		}
	}, [user, userLoading, userRefetching, pathname, navigate]);

	return (
		<>
			{userLoading ? <Spinner background={"tranparent"} fullPage /> : children}
		</>
	);
};

export default AuthGuard;

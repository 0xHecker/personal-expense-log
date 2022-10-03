import { useEffect } from "react";
import { queryClient } from "../constants/config";
import { Ax } from "../utils/Axios";

const SetupInterceptor = () => {
	const InterceptorID = Ax.interceptors.response.use(
		(response: any) => response,
		async (error: { response: { status: number } }) => {
			if (error?.response?.status === 401) {
				queryClient.refetchQueries("user");
				Promise.reject(error);
			} else {
				return Promise.reject(error);
			}
		}
	);
	return InterceptorID;
};

const Interceptor = () => {
	useEffect(() => {
		const InterceptorID = SetupInterceptor();
		return () => {
			Ax.interceptors.response.eject(InterceptorID);
		};
	}, []);

	return <></>;
};

export default Interceptor;

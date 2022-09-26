import { useQuery, useMutation } from "react-query";
import { Ax } from "../utils/Axios";

const fetchUser = async () => {
	return await Ax.get("me");
};

const loginUser = async (body: any) => {
	return await Ax.post("login", body);
};

const registerUser = async (body: any) => {
	return await Ax.post("register", body);
};

const logoutUser = async () => {
	return await Ax.post("logout");
};

export const useUser = () => {
	return useQuery("user", fetchUser, {
		refetchOnWindowFocus: true,
		retry: false,
	});
};

const userUpdate = async (body: any) => {
	return await Ax.patch("updateprofile", body);
};

const userUpdatePassword = async (body: any) => {
	return await Ax.patch("updateprofile/password", body);
};

export const useLoginUser = () => useMutation("loginUser", loginUser);

export const useLogoutUser = () => useMutation("logoutUser", logoutUser);

export const useRegisterUser = () => useMutation("registerUser", registerUser);

export const useUserUpdate = () => useMutation("updateUser", userUpdate);

export const useUserUpdatePassword = () =>
	useMutation("updateUserPassword", userUpdatePassword);

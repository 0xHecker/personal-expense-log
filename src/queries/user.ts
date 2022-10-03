import toast from "react-hot-toast";
import { useQuery, useMutation } from "react-query";
import { Ax } from "../utils/Axios";

const fetchUser = async () => {
	return await Ax.get("me");
};

const loginUser = async (body: any) => {
	const prom = Ax.post("login", body);
	toast.promise(prom, {
		loading: "Logging you in...",
		success: "Logged in!",
		error: "Error while logging in",
	});
	return await prom;
};

const registerUser = async (body: any) => {
	const prom = Ax.post("register", body);
	toast.promise(prom, {
		loading: "Registering...",
		success: "Succesfully registered",
		error: (err) => `${err.response.data[0].message}`,
	});
	return await prom;
};

const logoutUser = async () => {
	const prom = Ax.post("logout");
	toast.promise(prom, {
		loading: "Logging out...",
		success: "Logged out!",
		error: (err) => `Could not log out!`,
	});
	return await prom;
};

export const useUser = () => {
	return useQuery("user", fetchUser, {
		refetchOnWindowFocus: true,
		retry: false,
	});
};

const userUpdate = async (body: any) => {
	const prom = Ax.patch("updateprofile", body);
	toast.promise(prom, {
		loading: "Updating...",
		success: "Updated!",
		error: (err) => `Could not update!`,
	});
	return await prom;
};

const userUpdatePassword = async (body: any) => {
	const prom = Ax.patch("updateprofile/password", body);
	toast.promise(prom, {
		loading: "Updating...",
		success: "Updated!",
		error: (err) => `Could not update!`,
	});
	return await prom;
};

export const useLoginUser = () => useMutation("loginUser", loginUser);

export const useLogoutUser = () => useMutation("logoutUser", logoutUser);

export const useRegisterUser = () => useMutation("registerUser", registerUser);

export const useUserUpdate = () => useMutation("updateUser", userUpdate);

export const useUserUpdatePassword = () =>
	useMutation("updateUserPassword", userUpdatePassword);

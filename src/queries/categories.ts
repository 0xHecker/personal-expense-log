import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";
import { Ax } from "../utils/Axios";

const postCtg = async (props: any) => {
	const prom = Ax.post("/category", props);

	toast.promise(prom, {
		loading: "Adding new category...",
		success: "Added!",
		error: (err) => `Could not add!`,
	});

	return await prom;
};

const getCtgs = async () => {
	return await Ax.get("/categories");
};
const getCtgsSum = async () => {
	return await Ax.get("/categories/sum");
};

const deleteCategory = async (params: any) => {
	const prom = Ax.delete(`category/delete/${params}`);
	toast.promise(prom, {
		loading: "Deleting category...",
		success: "Deleted!",
		error: (err) => `Could not delete!`,
	});
	return await prom;
};

export const useCategoriesGet = () =>
	useQuery("Categories", getCtgs, {
		staleTime: 30000,
	});

export const useCategoriesSum = () =>
	useQuery("Categories_Sum", getCtgsSum, { staleTime: 30000 });

export const useCategoriesPost = (props: any) =>
	useMutation("Categories_Post", postCtg);

export const useCategoryDelete = () =>
	useMutation("Category_Delete", deleteCategory);

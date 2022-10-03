import { useQuery, useMutation } from "react-query";
import { Ax } from "../utils/Axios";
import { toast } from "react-hot-toast";

//AXIOS CALLS
const deleteTr = async (params: any) => {
	return await Ax.delete(`transaction/delete/${params}`);
};

const getTrs = async (params: TransactionParams) => {
	return await Ax.get("transactions", { params });
};

const postTr = async (params: any) => {
	let prom = Ax.post("transaction", params);

	toast.promise(prom, {
		loading: "Adding the transaction...",
		success: "Transaction added",
		error: "Error while adding transaction",
	});

	return await prom;
};

export interface TransactionParams {
	firstDate?: any;
	lastDate?: any;
	category?: any;
	dateSort?: any;
	priceSort?: any;
	skip?: any;
	take?: any;
	key?: any;
	enabled?: boolean;
}

export const useTrasactionDelete = () => useMutation("deleteTr", deleteTr);

export const useTransactionsGet = ({
	firstDate,
	lastDate,
	category,
	dateSort,
	priceSort,
	skip,
	take,
	key,
	enabled,
}: TransactionParams) =>
	useQuery(
		key,
		() =>
			getTrs({
				firstDate,
				lastDate,
				category,
				dateSort,
				priceSort,
				skip,
				take,
			}),
		{
			refetchOnWindowFocus: false,
			enabled: enabled || false,
			keepPreviousData: true,
		}
	);

export const useTransactionPost = () => useMutation("postTransaction", postTr);

import styles from "../../styles/transactionComponents/AddTransactionForm.module.scss";
import Title from "../Titles/Titles";

import { useCategoriesGet } from "../../queries/categories";
import { useTransactionPost } from "../../queries/transactions";
import { queryClient } from "../../constants/config";
import { useForm } from "react-hook-form";
// import { DateTime } from "luxon";
import Spinner from "../Spinner";
import toast from "react-hot-toast";

const Error = ({ error }: any) => {
	return (
		<>
			{error && (
				<span style={{ color: "red", marginBottom: "0.5rem" }}>
					{error.message}
				</span>
			)}
		</>
	);
};

const AddTransactionForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors: formErrors, isValidating: formValidating },
		reset: formReset,
	} = useForm();

	const {
		mutate: postTransaction,
		isLoading: postingTransaction,
		isSuccess: postedTransaction,
		isError: postingTransactionError,
		error: postingTransactionErr,
	} = useTransactionPost();

	const { data: ctgs, isFetched: ctgsFetched } = useCategoriesGet();

	return (
		<div className={styles.inner}>
			<form
				onSubmit={handleSubmit((d) => {
					postTransaction(d, {
						onSuccess: () => {
							queryClient.invalidateQueries("Categories_Sum");
							formReset();
						},
					});
				})}
			>
				<Title>Add a Transaction</Title>
				<input type="text" placeholder="* Title " {...register("title")} />
				<Error error={formErrors?.title?.message} />
				<input
					type="number"
					step={0.01}
					placeholder="* Money"
					{...register("money")}
				/>
				<Error error={formErrors?.money?.message} />
				<input type="date" placeholder="* Date" {...register("date")} />
				<Error error={formErrors?.date?.message} />
				<input type="text" placeholder="Information" {...register("info")} />
				<Error error={formErrors?.info?.message} />

				{/* CATEGORIES */}
				{ctgs && ctgsFetched ? (
					<>
						<select {...register("transactionCategoryId")}>
							{ctgs?.data?.ctgs?.map((ctg: any) => {
								return (
									<option key={ctg.id} value={ctg.id}>
										{ctg.name}
									</option>
								);
							})}
						</select>
						<Error error={formErrors?.transactionCategoryId?.message} />
					</>
				) : (
					<div>loading...</div>
				)}

				{/* POST TRANSACTION */}
				<button type="submit">Add Transaction</button>

				{/* ERROR */}
				<div style={{ marginBottom: "1rem" }}>
					{postingTransactionError ? (
						<div style={{ color: "red" }}>
							{/* @ts-ignore */}
							{postingTransactionErr?.response?.data?.message}
						</div>
					) : null}
					{postedTransaction && <div style={{ color: "green" }}>Success</div>}
				</div>
				{formValidating && <Spinner fullPage />}
			</form>
		</div>
	);
};

export default AddTransactionForm;

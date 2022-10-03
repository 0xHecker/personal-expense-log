import Title from "../Titles/Titles";
import TransactionCard from "../cards/TransactionCard";
import Spinner from "../Spinner";
import { BsTrash } from "react-icons/bs";

import styles from "../../styles/transactionComponents/DeleteTransactions.module.scss";

import { useState } from "react";
import { DateTime } from "luxon";

import {
	useTrasactionDelete,
	useTransactionsGet,
} from "../../queries/transactions";
import { queryClient } from "../../constants/config";
// import { TransactionParams } from "../../queries/transactions";

type Props = {};

const DeleteTransactionForm = (props: Props) => {
	const [firstDate, setFirstDate] = useState(
		DateTime.now()
			.minus({
				day: 1,
			})
			.toISODate()
	);
	const [lastDate, setLastDate] = useState(
		DateTime.now()
			.plus({
				day: 1,
			})
			.toISODate()
	);
	const { mutate: deleteTr, isLoading: transactionDeleting } =
		useTrasactionDelete();

	const [enableTrs, setEnableTrs] = useState(false);
	//GET TRANSACTIONS
	const {
		data,
		refetch: fetchTransactions,
		isLoading: transactionsLoading,
		isRefetching: transactionsRefetching,
	} = useTransactionsGet({
		firstDate,
		lastDate,
		enabled: enableTrs,
		key: "Trs",
	});

	return (
		<div className={styles.container}>
			<Title>Delete a Transaction</Title>
			<div className={styles.dateSearchFilter}>
				{/* FIRST DATE */}
				<div className={styles.date}>
					<label htmlFor="firstDate">From :</label>
					<input
						type="date"
						name="firstDate"
						value={firstDate}
						onChange={(e) => setFirstDate(e.target.value)}
					/>
				</div>
				{/* LAST DATE */}
				<div className={styles.date}>
					<label htmlFor="lastDate">To :</label>
					<input
						type="date"
						name="lastDate"
						value={lastDate}
						onChange={(e) => setLastDate(e.target.value)}
					/>
				</div>
				{/* ACTION BUTTON */}
				<button
					className={styles.btn}
					onClick={() => {
						fetchTransactions();
						setEnableTrs(true);
					}}
				>
					Show Transactions
				</button>
			</div>

			{/* RESULTS */}
			<div className={styles.results}>
				{data &&
					data?.data?.transactions?.map((tr: any, index: any) => {
						return (
							<div key={index} className={styles.container}>
								<div className={styles.deleteContainer}>
									<TransactionCard
										category={tr.category.name}
										money={tr.money}
										//description={`id : ${tr.id}title: ${tr.title} ${tr.info}`}
										date={DateTime.fromISO(tr.date).toISODate()}
										title={tr.title}
										description={""}
									/>
									<button
										className={styles.iconContainer}
										style={
											transactionsLoading
												? {
														pointerEvents: "none",
														background: "#333",
												  }
												: {}
										}
										onClick={() => {
											console.log(tr.id);
											deleteTr(tr.id, {
												onSuccess: async () => {
													queryClient.invalidateQueries("Trs");
												},
											});
										}}
									>
										<BsTrash />
									</button>
								</div>
							</div>
						);
					})}
			</div>
			{(transactionsLoading ||
				transactionDeleting ||
				transactionsRefetching) && <Spinner fullPage />}
		</div>
	);
};

export default DeleteTransactionForm;

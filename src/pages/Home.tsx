import CategoryCards from "../components/cards/CategoryCards";
import TransactionCard from "../components/cards/TransactionCard";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/HomeComponents/SearchBar";
import Title from "../components/Titles/Titles";
import styles from "../styles/homeComponents/Home.module.scss";
import HomeProfile from "../components/HomeComponents/HomeProfile";
import Spinner from "../components/Spinner";
import { DateTime } from "luxon";
import { Key, useEffect } from "react";
import { useTransactionsGet } from "../queries/transactions";
import { useCategoriesSum } from "../queries/categories";

const Home = () => {
	//LATEST TRS
	const {
		data: transactions,
		refetch: fetchTransactions,
		isLoading: transactionsLoading,
	} = useTransactionsGet({
		key: "Trs_Latest",
		skip: 0,
		take: 5,
	});

	const { data: categoriesSum, isLoading: categoriesSumLoading } =
		useCategoriesSum();
	useEffect(() => {
		fetchTransactions();
	}, [fetchTransactions]);

	return (
		<MainContainer optionClass={styles.container}>
			<div className={styles.main}>
				<SearchBar />

				{/* CATEGORIES */}
				<div className={styles.categories}>
					<Title>Categories Last 30 Days</Title>
					{categoriesSumLoading ? (
						<Spinner fullPage={false} />
					) : (
						<div className={styles.content}>
							{categoriesSum?.data?.map(
								(
									category: { name: any; sum: number },
									index: Key | null | undefined
								) => {
									return (
										<CategoryCards
											key={index}
											category={category?.name}
											money={
												category?.sum > 1000
													? `-$${(category.sum / 1000).toFixed(1)}k`
													: category?.sum < 1000 && category?.sum > 0
													? `-$${category.sum}`
													: "No Expenses"
											}
										/>
									);
								}
							)}
						</div>
					)}
				</div>

				{/* TRANSACTIONS */}
				<div className={styles.transactions}>
					<Title>Latest Transactions</Title>
					{transactionsLoading ? (
						<Spinner fullPage={false} />
					) : (
						<div className={styles.content}>
							{/* LATEST TRANSACTIONS */}
							{transactions?.data?.transactions?.map(
								(
									transaction: {
										category: { name: string | undefined };
										date: string;
										money: number;
										info: string;
										title: string;
									},
									index: Key | null | undefined
								) => {
									return (
										<TransactionCard
											key={index}
											category={transaction?.category?.name}
											date={DateTime.fromISO(transaction?.date).toISODate()}
											money={transaction?.money?.toFixed(2)}
											description={transaction?.info}
											title={transaction?.title}
										/>
									);
								}
							)}
						</div>
					)}
				</div>
			</div>
			<div className={styles.profile}>
				<HomeProfile />
			</div>
		</MainContainer>
	);
};

export default Home;

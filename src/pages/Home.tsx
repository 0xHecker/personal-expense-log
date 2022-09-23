import CategoryCards from "../components/cards/CategoryCards";
import TransactionCard from "../components/cards/TransactionCard";
import MainContainer from "../components/Containers/MainContainer";
import SearchBar from "../components/HomeComponents/SearchBar";
import Title from "../components/Titles/Titles";
import styles from "../styles/homeComponents/Home.module.scss";
import HomeProfile from "../components/HomeComponents/HomeProfile";

const Home = () => {
	return (
		<MainContainer optionClass={styles.container}>
			<div className={styles.main}>
				{/* Searches */}
				<div className={styles.searchBar}>
					<SearchBar />
				</div>

				{/* Categories */}
				<div className={styles.categories}>
					<Title>
						<strong>Categories Last 30 Days</strong>
					</Title>
					<div className={styles.content}>
						<CategoryCards category={"Other"} money={"20k"} />
						<CategoryCards category={"Entertainment"} money={"50k"} />
						<CategoryCards category={"Bills"} money={"10k"} />
						<CategoryCards category={"Other"} money={"5k"} />
					</div>
				</div>

				<div className={styles.transactions}>
					<Title>
						<h3>Latest Transactions</h3>
					</Title>
					<div className={styles.content}>
						<TransactionCard title={"sdsd"} description={"dsdfsd"} />
					</div>
				</div>
			</div>
			<div className={styles.profile}>
				<HomeProfile />
			</div>
		</MainContainer>
	);
};

export default Home;

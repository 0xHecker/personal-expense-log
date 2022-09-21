import styles from "./styles/App.module.scss";
import PageContainer from "./components/Containers/PageContainer";
import NavBar from "./components/Navbar/NavBar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<PageContainer>
					<NavBar />
					<div className={styles.mobileMenu}>
						<MobileNavbar />
					</div>
					<Routes>
						<Route>
							<Route path="/auth" element={<MobileNavbar />}></Route>
						</Route>
					</Routes>
				</PageContainer>
			</BrowserRouter>
		</div>
	);
}

export default App;

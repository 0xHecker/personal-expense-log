import styles from "./styles/App.module.scss";
import PageContainer from "./components/Containers/PageContainer";
import NavBar from "./components/Navbar/NavBar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainContainer from "./components/Containers/MainContainer";
import Home from "./pages/Home";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<PageContainer optionClass={styles.pageContainer}>
					<NavBar />
					<div className={styles.mobileMenu}>
						<MobileNavbar />
					</div>
					<Routes>
						<Route>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
							{/* Protected Routes */}
							<Route element={<Outlet />} />
							{/* Home */}
							<Route path="/" element={<Home />} />
							{/* 404 */}
							<Route
								path="/*"
								element={
									<MainContainer>
										<span style={{ fontSize: "1.2rem" }}>
											404 Page Not Found
										</span>
									</MainContainer>
								}
							/>
						</Route>
					</Routes>
				</PageContainer>
			</BrowserRouter>
		</div>
	);
}

export default App;

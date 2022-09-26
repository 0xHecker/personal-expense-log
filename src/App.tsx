import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./styles/App.module.scss";
import PageContainer from "./components/Containers/PageContainer";
import NavBar from "./components/Navbar/NavBar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";

// React Query
// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthProvider";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient} contextSharing={true}>
					<AuthProvider>
						<PageContainer optionClass={styles.pageContainer}>
							<NavBar />
							<div className={styles.mobileMenu}>
								<MobileNavbar />
							</div>
							<Routes>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />

								{/* Protected  Routes */}
								<Route element={<ProtectedRoutes />}>
									{/* Home */}
									<Route path="/" element={<Home />} />
									{/* Settings*/}
									<Route path="/settings" element={<Settings />} />
									{/* Profile */}
									<Route path="/profile" element={<Profile />} />
								</Route>

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
							</Routes>
						</PageContainer>
					</AuthProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

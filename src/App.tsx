import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import PageContainer from "./components/Containers/PageContainer";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import NavBar from "./components/Navbar/NavBar";
import styles from "./styles/App.module.scss";
import { Toaster } from "react-hot-toast";

// React Query
// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";
import { AuthProvider } from "./context/AuthProvider";
import AuthGuard from "./components/AuthGuard";
import Interceptor from "./components/Interceptor";

function App() {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<QueryClientProvider client={queryClient} contextSharing={true}>
					<AuthProvider>
						<Toaster position="top-right" reverseOrder={false} />
						<PageContainer optionClass={styles.pageContainer}>
							<NavBar />
							<div className={styles.mobileMenu}>
								<MobileNavbar />
							</div>
							<Interceptor />
							<AuthGuard>
								<AnimatedRoutes />
							</AuthGuard>
						</PageContainer>
					</AuthProvider>
				</QueryClientProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

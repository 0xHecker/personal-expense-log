import React from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import CategoriesRoot from "../pages/CategoriesRoot";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Signup from "../pages/Signup";
import TransactionsRoot from "../pages/TransactionsRoot";
import Categories from "./CategoryComponents/Categories";
import CategoryCreate from "./CategoryComponents/CreateCategory";
import CategoryDelete from "./CategoryComponents/DeleteCategory";
import MainContainer from "./Containers/MainContainer";
import AddTransactionForm from "./TransactionComponents/AddTransactionForm";
import DeleteTransactionForm from "./TransactionComponents/DeleteTransactionForm";
import { AnimatePresence } from "framer-motion";

export function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes key={location.pathname} location={location}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />

				{/* Home */}
				<Route path="/" element={<Home />} />
				{/* Settings*/}
				<Route path="/settings" element={<Settings />} />
				{/* Profile */}
				<Route path="/profile" element={<Profile />} />
				{/* Transactions */}
				<Route path="transactions" element={<TransactionsRoot />}>
					<Route index element={<AddTransactionForm />} />
					<Route path="create" element={<AddTransactionForm />} />
					<Route path="delete" element={<DeleteTransactionForm />} />
				</Route>

				{/* CATEGORIES */}
				<Route path="categories" element={<CategoriesRoot />}>
					<Route index element={<Categories />} />
					<Route path="results" element={<Categories />} />
					<Route path="create" element={<CategoryCreate />} />
					<Route path="delete" element={<CategoryDelete />} />
				</Route>

				<Route path="/logout" element={<Outlet />} />

				{/* 404 */}
				<Route
					path="/*"
					element={
						<MainContainer>
							<span
								style={{
									fontSize: "1.2rem",
								}}
							>
								404 Page Not Found
							</span>
						</MainContainer>
					}
				/>
			</Routes>
		</AnimatePresence>
	);
}

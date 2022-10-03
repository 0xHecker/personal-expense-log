import { QueryClient } from "react-query";
import { __prod__ } from "../utils/prod";

const queryClient = new QueryClient();
const url = __prod__
	? process.env.REACT_APP_API_URL
	: process.env.REACT_APP_API_URL_DEV;

const AXIOS_URL = `${process.env.REACT_APP_API_URL}/api`;
export { AXIOS_URL, queryClient };

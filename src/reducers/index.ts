import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import ApplicationState from "@reduxTypes/";
import themeReducer from "./themeReducer";

const createRootReducer = (history: History) =>
	combineReducers<ApplicationState>({
		theme: themeReducer,
		router: connectRouter(history)
	});

export default createRootReducer;

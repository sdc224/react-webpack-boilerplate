import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import ApplicationState from "@reduxTypes/";

const createRootReducer = (history: History) =>
	combineReducers<ApplicationState>({
		router: connectRouter(history)
	});

export default createRootReducer;

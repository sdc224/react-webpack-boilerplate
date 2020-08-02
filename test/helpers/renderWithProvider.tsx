import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import createRootReducer from "@reducers/";
import history from "@history/";
import sagaMiddleware from "@app/src/store/middlewares/sagas";
import { routerMiddleware } from "connected-react-router";

const reducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(sagaMiddleware, router);

export default function renderWithProviders(
	children: React.ReactNode = null,
	reduxState: any,
	initialState = {}
) {
	const store = createStore(reducer, reduxState || initialState, enhancer);
	return render(<Provider store={store}>{children}</Provider>);
}

import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { createBrowserHistory } from "history";
import createRootReducer from "@reducers/";

const history = createBrowserHistory();
const reducer = createRootReducer(history);

export default function renderWithProviders(
	children: React.ReactNode = null,
	reduxState: any,
	initialState = {}
) {
	const store = createStore(reducer, reduxState || initialState);
	return render(<Provider store={store}>{children}</Provider>);
}

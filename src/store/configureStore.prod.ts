import { createStore, applyMiddleware, Store } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import sagaMiddleware from "./middlewares/sagas";
import createRootReducer from "@reducers/";
import rootSaga from "@sagas/";
import ApplicationState from "@reduxTypes/";

const history = createBrowserHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(sagaMiddleware, router);

function configureStore(
	initialState?: ApplicationState
): Store<ApplicationState> {
	const store = createStore(rootReducer, initialState, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}

export default { configureStore, history };

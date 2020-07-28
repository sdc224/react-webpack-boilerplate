import { createStore, applyMiddleware, Store } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "@reducers/";
import rootSaga from "@sagas/";
import history from "@history/";
import ApplicationState from "@reduxTypes/";
import sagaMiddleware from "./middlewares/sagas";

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

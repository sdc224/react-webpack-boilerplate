import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
// import { hot } from "react-hot-loader/root";
import { History } from "history";
import Loading from "@components/Loading";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import theme from "@theme/";
// import { ConfirmationServiceProvider } from "./ConfirmationService";

const Routes = React.lazy(() => import("@routes/"));

interface RootProps<T> {
	store: Store<T>;
	history: History;
}

const Root = <T extends unknown>({ store, history }: RootProps<T>) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={createMuiTheme()}>
				{/* <ConfirmationServiceProvider> */}
				<React.Suspense fallback={<Loading />}>
					<Routes />
				</React.Suspense>
				{/* </ConfirmationServiceProvider> */}
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>
);

export default Root;

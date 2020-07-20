import React from "react";
import { Switch, Redirect } from "react-router-dom";
import App from "@containers/App";
import RouteWithLayout from "@components/RouteWithLayout";
import routes from "./Routes";

const Routes: React.FC = () => {
	return (
		<App>
			<Switch>
				<Redirect exact from="/" to="/dashboard" />
				{routes.map((route) => (
					<RouteWithLayout
						key={route.key}
						exact={route.exact}
						path={route.path}
						component={route.component}
						layout={route.layout}
					/>
				))}
				<Redirect to="/not-found" />
			</Switch>
		</App>
	);
};

export default Routes;

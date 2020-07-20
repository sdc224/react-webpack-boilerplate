import { RouteProps } from "react-router-dom";
import { Main, Minimal } from "@layouts/";
import { Dashboard, NotFound } from "@views/";
import jsonRoutes from "./jsonRoutes.json";

interface IRouteWithLayout {
	key: string;
	layout: React.FC;
}

type RoutePropsWithLayout = RouteProps & IRouteWithLayout;

const routes: RoutePropsWithLayout[] = [
	// {
	// 	key: "1",
	// 	path: jsonRoutes.WELCOME,
	// 	exact: true,
	// 	component: Welcome,
	// 	layout: Main
	// },
	{
		key: "2",
		path: jsonRoutes.DASHBOARD,
		exact: true,
		component: Dashboard,
		layout: Main
	},
	// {
	// 	key: "3",
	// 	path: jsonRoutes.SIGNIN,
	// 	exact: true,
	// 	component: SignIn,
	// 	layout: Minimal
	// },
	// {
	// 	key: "4",
	// 	path: jsonRoutes.SETTINGS,
	// 	exact: true,
	// 	component: Settings,
	// 	layout: Main
	// },
	{
		key: "99",
		path: jsonRoutes.NOTFOUND,
		exact: true,
		component: NotFound,
		layout: Minimal
	}
];

export default routes;

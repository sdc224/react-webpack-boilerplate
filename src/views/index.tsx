import React from "react";
import Loading from "@components/Loading";

const DashboardView = React.lazy(() => import("./Dashboard"));
// const OperationsView = React.lazy(() => import("./Operations"));
// const WelcomeView = React.lazy(() => import("./Welcome"));
// const SignInView = React.lazy(() => import("./SignIn"));
// const SettingsView = React.lazy(() => import("./Settings"));
const NotFoundView = React.lazy(() => import("./NotFound"));

// const Welcome = () => (
// 	<React.Suspense fallback={<Loading />}>
// 		<WelcomeView />
// 	</React.Suspense>
// );

// const Home = () => (
// 	<React.Suspense fallback={<Loading />}>
// 		<HomeView />
// 	</React.Suspense>
// );

const Dashboard = () => (
	<React.Suspense fallback={<Loading />}>
		<DashboardView />
	</React.Suspense>
);

// const Operations = () => (
// 	<React.Suspense fallback={<Loading />}>
// 		<OperationsView />
// 	</React.Suspense>
// );

// const SignIn = () => (
// 	<React.Suspense fallback={<Loading />}>
// 		<SignInView />
// 	</React.Suspense>
// );

// const Settings = () => (
// 	<React.Suspense fallback={<Loading />}>
// 		<SettingsView />
// 	</React.Suspense>
// );

const NotFound = () => (
	<React.Suspense fallback={<Loading />}>
		<NotFoundView />
	</React.Suspense>
);

export { Dashboard, NotFound };

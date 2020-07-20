import React from "react";
import { Route, RouteProps } from "react-router-dom";

interface IProps {
	layout: React.FC;
}

const RouteWithLayout = (props: IProps & RouteProps) => {
	const { layout: Layout, component, ...rest } = props;
	const Component = component as React.ElementType;

	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;

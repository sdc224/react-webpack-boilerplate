import React from "react";
import { render, RenderResult } from "@testing-library/react";
import RouteWithLayout from "@components/RouteWithLayout";
import MockComponent from "../mocks/MockComponent";
import { MemoryRouter, Switch, Redirect } from "react-router-dom";

let documentBody: RenderResult;

describe("<Route />", () => {
	beforeEach(() => {
		documentBody = render(
			<MemoryRouter>
				<Switch>
					<Redirect exact from="/" to="/mock" />
					<RouteWithLayout
						exact
						path="/mock"
						component={MockComponent}
						layout={MockComponent}
					/>
				</Switch>
			</MemoryRouter>
		);
	});
	it("has mock test", () => {
		const { getAllByText } = documentBody;
		expect(getAllByText(/Mock Component/i)).toHaveLength(2);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

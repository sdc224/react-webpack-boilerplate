import React from "react";
import { render, RenderResult } from "@testing-library/react";
import RouteWithLayout from "@components/RouteWithLayout";
import MockComponent from "../mocks/MockComponent";
import { MemoryRouter } from "react-router-dom";

let documentBody: RenderResult;

describe("<RouteWithLayout />", () => {
	beforeEach(() => {
		documentBody = render(
			<MemoryRouter>
				<RouteWithLayout
					path="/mock"
					component={MockComponent}
					layout={MockComponent}
				/>
			</MemoryRouter>
		);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

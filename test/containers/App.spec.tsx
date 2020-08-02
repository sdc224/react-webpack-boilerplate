import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "@containers/App";
import MockComponent from "../mocks/MockComponent";

let documentBody: RenderResult;

describe("<App />", () => {
	beforeEach(() => {
		documentBody = render(
			<App>
				<MockComponent />
			</App>
		);
	});
	it("has mock test", () => {
		const { getByText } = documentBody;
		expect(getByText(/Mock Component/i)).toBeInTheDocument();
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

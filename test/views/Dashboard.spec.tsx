import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Dashboard from "@views/Dashboard";

let documentBody: RenderResult;

describe("<Dashboard />", () => {
	beforeEach(() => {
		documentBody = render(<Dashboard />);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

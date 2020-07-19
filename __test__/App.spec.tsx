import React from "react";
import { render, RenderResult } from "@testing-library/react";
import App from "../src/App";

let documentBody: RenderResult;

describe("<App />", () => {
	beforeEach(() => {
		documentBody = render(<App />);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

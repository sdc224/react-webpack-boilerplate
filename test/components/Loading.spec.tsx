import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Loading from "@components/Loading";

let documentBody: RenderResult;

describe("<Loading />", () => {
	beforeEach(() => {
		documentBody = render(<Loading />);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

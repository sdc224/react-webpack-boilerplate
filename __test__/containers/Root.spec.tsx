import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Root from "@containers/Root";
import { configureStore, history } from "@store/configureStore";

const store = configureStore();

let documentBody: RenderResult;

describe("<Root />", () => {
	beforeEach(() => {
		documentBody = render(<Root store={store} history={history} />);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

import React from "react";
import { RenderResult } from "@testing-library/react";
import ThemeWrapper from "@containers/ThemeWrapper";
import MockComponent from "../mocks/MockComponent";
import renderWithProviders from "../helpers/renderWithProvider";
import { initialState } from "@reducers/themeReducer";

let documentBody: RenderResult;

describe("<ThemeWrapper />", () => {
	beforeEach(() => {
		documentBody = renderWithProviders(
			<ThemeWrapper>
				<MockComponent />
			</ThemeWrapper>,
			{ theme: { initialState } }
		);
	});
	it("matches snapshot", () => {
		const { baseElement } = documentBody;
		expect(baseElement).toMatchSnapshot();
	});
});

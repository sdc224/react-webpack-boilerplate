import React from "react";
import { RenderResult } from "@testing-library/react";
import { Minimal } from "@layouts/";
import { MemoryRouter } from "react-router-dom";
import renderWithProviders from "../helpers/renderWithProvider";
import { initialState } from "@reducers/themeReducer";
import MockComponent from "../mocks/MockComponent";

let documentBody: RenderResult;

describe("<Minimal />", () => {
	beforeEach(() => {
		// need to use Router as Topbar has Link
		documentBody = renderWithProviders(
			<MemoryRouter>
				<Minimal>
					<MockComponent />
				</Minimal>
			</MemoryRouter>,
			{ theme: { initialState } }
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

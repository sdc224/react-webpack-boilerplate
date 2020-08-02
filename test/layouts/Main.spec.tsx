import React from "react";
import { RenderResult } from "@testing-library/react";
import { Main } from "@layouts/";
import { MemoryRouter } from "react-router-dom";
import renderWithProviders from "../helpers/renderWithProvider";
import { initialState } from "@reducers/themeReducer";
import MockComponent from "../mocks/MockComponent";

let documentBody: RenderResult;

describe("<Main />", () => {
	beforeEach(() => {
		// need to use Router as Topbar has Link
		documentBody = renderWithProviders(
			<MemoryRouter>
				<Main>
					<MockComponent />
				</Main>
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

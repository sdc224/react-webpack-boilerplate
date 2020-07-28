import { PayloadAction } from "typesafe-actions";
import { ThemeActionTypes, ThemeState } from "../reduxTypes/themeTypes";

export const initialState: ThemeState = {
	darkMode: false
};

const themeReducer = (
	state = initialState,
	action: PayloadAction<string, boolean>
): ThemeState => {
	switch (action.type) {
		case ThemeActionTypes.SET_DARK_MODE:
			return { ...state, darkMode: action.payload };

		default:
			return state;
	}
};

export default themeReducer;

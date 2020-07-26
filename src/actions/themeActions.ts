import { action } from "typesafe-actions";
import { ThemeActionTypes } from "../reduxTypes/themeTypes";

export const setDarkMode = (value: boolean) =>
	action(ThemeActionTypes.SET_DARK_MODE, value);

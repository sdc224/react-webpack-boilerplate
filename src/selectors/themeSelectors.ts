import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeAwareState } from "../reduxTypes/themeTypes";
import { setDarkMode } from "../actions/themeActions";

const useThemeSelector = () => {
	const dispatch = useDispatch();

	const darkMode = useSelector(
		(state: ThemeAwareState) => state.theme.darkMode
	);

	const changeTheme = React.useCallback(
		(mode: boolean) => dispatch(setDarkMode(mode)),
		[dispatch]
	);

	return {
		darkMode,
		changeTheme
	};
};

export default useThemeSelector;

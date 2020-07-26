import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { darkTheme, lightTheme } from "@theme/";
import useThemeSelector from "@selectors/themeSelectors";

interface ThemeWrapperProps {
	children: React.ReactNode;
}

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
	const { darkMode } = useThemeSelector();
	const theme = darkMode ? darkTheme : lightTheme;

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

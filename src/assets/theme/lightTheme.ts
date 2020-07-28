import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./lightPalette";
import overrides from "./overrides";
import muiTypography from "./typography";

const typography = muiTypography(palette);

const lightTheme = createMuiTheme({
	palette,
	typography,
	overrides: overrides(palette, typography),
	zIndex: {
		appBar: 1200,
		drawer: 1100
	}
});

export default lightTheme;

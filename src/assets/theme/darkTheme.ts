import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";
import overrides from "./overrides";
import muiTypography from "./typography";
// import blueGrey from "@material-ui/core/colors/blueGrey";

const typography = muiTypography(palette);

const darkTheme = createMuiTheme({
	palette: {
		...palette,
		type: "dark"
		// primary: {
		// 	main: blueGrey[600]
		// }
	},
	typography,
	overrides: overrides(palette, typography),
	zIndex: {
		appBar: 1200,
		drawer: 1100
	}
});

export default darkTheme;

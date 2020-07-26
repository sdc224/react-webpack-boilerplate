import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";
// import blueGrey from "@material-ui/core/colors/blueGrey";

const lightTheme = createMuiTheme({
	palette: {
		...palette,
		type: "light"
		// primary: {
		// 	main: blueGrey[500]
		// }
	}
});

export default lightTheme;

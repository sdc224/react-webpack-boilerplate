import { createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: {
			main: blueGrey[600]
		}
	}
});

export default darkTheme;

import * as colors from "@material-ui/core/colors";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

// Dark Palette, so defining black and white vice versa
const white = "#000000";
const black = "#FFFFFF";

export default {
	type: "dark",
	black,
	white,
	primary: {
		contrastText: white,
		dark: colors.indigo[600],
		main: colors.indigo[300],
		light: colors.indigo[500]
	},
	secondary: {
		contrastText: white,
		dark: colors.blue[600],
		main: colors.blue["A200"],
		light: colors.blue["A700"]
	},
	success: {
		contrastText: white,
		dark: colors.green[600],
		main: colors.green[400],
		light: colors.green[600]
	},
	info: {
		contrastText: white,
		dark: colors.blue[600],
		main: colors.blue[300],
		light: colors.blue[700]
	},
	warning: {
		contrastText: white,
		dark: colors.orange[600],
		main: colors.orange[300],
		light: colors.orange[700]
	},
	error: {
		contrastText: white,
		dark: colors.red[600],
		main: colors.red[300],
		light: colors.red[700]
	},
	text: {
		primary: colors.blueGrey[600],
		secondary: colors.blueGrey[300],
		link: colors.blue[900]
	},
	background: {
		default: "#0b0907",
		paper: white
	},
	icon: colors.blueGrey[300],
	divider: colors.grey[500]
} as PaletteOptions;

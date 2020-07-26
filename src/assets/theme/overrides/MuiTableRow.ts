import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export default (palette: PaletteOptions) => ({
	root: {
		"&$selected": {
			backgroundColor: palette.background.default
		},
		"&$hover": {
			"&:hover": {
				backgroundColor: palette.background.default
			}
		}
	}
});

import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { createStyles } from "@material-ui/core/styles";

export default (palette: PaletteOptions) =>
	createStyles({
		root: {
			color: palette.icon as string,
			"&:hover": {
				backgroundColor: "rgba(0, 0, 0, 0.03)"
			}
		}
	});

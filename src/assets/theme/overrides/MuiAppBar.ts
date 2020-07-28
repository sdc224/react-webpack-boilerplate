import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { createStyles } from "@material-ui/core/styles";

export default (palette: PaletteOptions) =>
	createStyles({
		root: {
			backgroundColor: palette.white
		}
	});

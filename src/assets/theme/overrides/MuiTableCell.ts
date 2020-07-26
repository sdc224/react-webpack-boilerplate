import { Typography } from "@material-ui/core/styles/createTypography";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export default (palette: PaletteOptions, typography: Typography) => ({
	root: {
		...typography.body1,
		borderBottom: `1px solid ${palette.divider}`
	}
});

import { PaletteOptions } from "@material-ui/core/styles/createPalette";
import { Typography } from "@material-ui/core/styles/createTypography";
// import { Overrides } from "@material-ui/core/styles/overrides";
import MuiButton from "./MuiButton";
import MuiIconButton from "./MuiIconButton";
import MuiPaper from "./MuiPaper";
import MuiTableCell from "./MuiTableCell";
import MuiTableHead from "./MuiTableHead";
import MuiTypography from "./MuiTypography";
import MuiAppBar from "./MuiAppBar";

export default (palette: PaletteOptions, typography: Typography) => ({
	MuiButton,
	MuiIconButton: MuiIconButton(palette),
	MuiPaper,
	MuiTableCell: MuiTableCell(palette, typography),
	MuiTableHead,
	MuiTypography,
	MuiAppBar: MuiAppBar(palette)
});

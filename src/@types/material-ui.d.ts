import {
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions
} from "@material-ui/core/styles/createMuiTheme";
import {
	Palette as MuiPalette,
	PaletteOptions as MuiPaletteOptions,
	PaletteColorOptions,
	PaletteColorOptions
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createMuiTheme" {
	interface Theme extends MuiTheme {
		status?: {
			danger?: React.CSSProperties["color"];
		};
	}
	interface ThemeOptions extends MuiThemeOptions {
		status?: {
			danger?: React.CSSProperties["color"];
		};
	}
}

declare module "@material-ui/core/styles/createPalette" {
	interface Palette extends MuiPalette {
		white?: React.CSSProperties["color"];
		black?: React.CSSProperties["color"];
		neutral?: PaletteColorOptions;
		icon?: PaletteColorOptions;
	}
	interface PaletteOptions extends MuiPaletteOptions {
		white?: React.CSSProperties["color"];
		black?: React.CSSProperties["color"];
		neutral?: PaletteColorOptions;
		icon?: PaletteColorOptions;
	}
}

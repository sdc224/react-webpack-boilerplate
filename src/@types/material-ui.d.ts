import {
	Palette as MuiPalette,
	PaletteOptions as MuiPaletteOptions,
	PaletteColorOptions,
	PaletteColorOptions
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createMuiTheme" {
	interface Theme {
		status?: {
			danger?: React.CSSProperties["color"];
		};
	}
	interface ThemeOptions {
		status?: {
			danger?: React.CSSProperties["color"];
		};
	}
}

declare module "@material-ui/core/styles/createPalette" {
	interface Palette extends MuiPalette {
		neutral?: PaletteColorOptions;
		icon?: PaletteColorOptions;
	}
	interface PaletteOptions extends MuiPaletteOptions {
		neutral?: PaletteColorOptions;
		icon?: PaletteColorOptions;
	}
}

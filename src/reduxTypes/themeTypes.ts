export const ThemeActionTypes = {
	SET_DARK_MODE: "@@theme/SET_DARK_MODE"
};

export interface ThemeState {
	darkMode: boolean;
}

export interface ThemeAwareState {
	theme: ThemeState;
}

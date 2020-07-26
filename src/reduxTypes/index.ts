import { RouterState } from "connected-react-router";
import { ThemeState } from "./themeTypes";

export default interface ApplicationState {
	theme: ThemeState;
	router: RouterState;
}

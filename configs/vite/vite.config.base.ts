import ViteAliasConfig from "./vite.config.alias";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsPaths from "vite-tsconfig-paths";
import { injectHtml } from "vite-plugin-html";
import envCompatible from "vite-plugin-env-compatible";

export default {
	...ViteAliasConfig,
	plugins: [reactRefresh(), envCompatible(), injectHtml(), tsPaths()]
};

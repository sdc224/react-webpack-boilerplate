import { defineConfig } from "vite";
import ViteConfigBase from "./vite.config.base";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default defineConfig({
	...ViteConfigBase,
	build: {
		rollupOptions: {
			plugins: [
				babel({
					babelHelpers: "bundled",
					exclude: "node_modules/**"
				}),
				replace({
					"process.env.NODE_ENV": JSON.stringify("production")
				}),
				commonjs({
					include: ["./node_modules/**"],
					extensions: [".js", ".jsx", ".ts", ".tsx"]
				})
			]
		}
	}
});

import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";
import baseConfig from "./webpack.common";

const config: webpack.Configuration = webpackMerge(baseConfig, {
	mode: "production"
});

export default config;

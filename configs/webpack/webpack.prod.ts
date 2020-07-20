import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";
import baseConfig from "./webpack.common";

const config: webpack.Configuration = webpackMerge(baseConfig, {
	mode: "production",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
});

export default config;

import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import prodConfig from "./webpack.prod";

const config: webpack.Configuration = webpackMerge(prodConfig, {
	plugins: [new BundleAnalyzerPlugin()]
});

export default config;

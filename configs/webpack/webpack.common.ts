import path from "path";
import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import aliasConfig from "./webpack.alias";
import paths from "../paths";

const config: webpack.Configuration = webpackMerge(aliasConfig, {
	entry: {
		app: paths.src
	},
	target: "web",
	output: {
		filename: "[name].js",
		// chunkFilename: "chunk-[name].[contenthash].js",
		path: path.join(paths.build, paths.publicPath),
		publicPath: paths.publicPath
	},
	resolve: {
		// Don't remove options like js, cjs, mjs, as they are necessary for webpack-dev-server
		extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "babel-loader",
						query: {
							cacheDirectory: true
						}
					},
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true
						}
					}
				],
				exclude: paths.nodeModules
			},
			{
				test: /\.css$/,
				loader: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(paths.src, "index.html")
		}),
		new ForkTsCheckerWebpackPlugin()
	],
	optimization: {
		// splitChunks: {
		// 	cacheGroups: {
		// 		vendors: {
		// 			test: /[\\/]node_modules[\\/]/,
		// 			name: "vendors",
		// 			chunks: "all"
		// 		}
		// 	}
		// },
		concatenateModules: true,
		removeAvailableModules: true,
		removeEmptyChunks: true
	},
	stats: {
		cached: false,
		cachedAssets: false,
		chunks: false,
		chunkModules: false,
		children: false,
		colors: true,
		hash: false,
		modules: false,
		reasons: false,
		timings: true,
		version: false
	}
});

export default config;

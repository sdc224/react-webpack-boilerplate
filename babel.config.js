module.exports = function (api) {
	api.cache(true);
	const presets = [
		["@babel/preset-typescript"],
		[
			"@babel/preset-env",
			{
				corejs: { version: 3 },
				useBuiltIns: "entry",
				targets: {
					edge: "17",
					firefox: "60",
					chrome: "67",
					safari: "11.1",
					ie: "11"
				}
			}
		]
	];
	const plugins = [
		[
			"babel-plugin-import",
			{
				libraryName: "@material-ui/core",
				// Use "'libraryDirectory': ''," if your bundler does not support ES modules
				libraryDirectory: "esm",
				camel2DashComponentName: false
			},
			"core"
		],
		[
			"babel-plugin-import",
			{
				libraryName: "@material-ui/icons",
				// Use "'libraryDirectory': ''," if your bundler does not support ES modules
				libraryDirectory: "esm",
				camel2DashComponentName: false
			},
			"icons"
		],
		["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
		["@babel/plugin-proposal-class-properties"],
		["@babel/plugin-transform-runtime"]
	];
	return {
		presets,
		plugins
	};
};

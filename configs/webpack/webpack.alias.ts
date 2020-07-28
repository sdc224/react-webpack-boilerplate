import webpack from "webpack";
import paths from "../paths";

const config: webpack.Configuration = {
	resolve: {
		alias: {
			"@app": paths.app,
			"@src": paths.src,
			"@types": paths.appTypes,
			"@assets": paths.assets,
			"@images": paths.images,
			"@theme": paths.theme,
			"@components": paths.components,
			"@containers": paths.containers,
			"@routes": paths.routes,
			"@layouts": paths.layouts,
			"@views": paths.views,
			"@utils": paths.utils,
			"@actions": paths.actions,
			"@reducers": paths.reducers,
			"@selectors": paths.selectors,
			"@sagas": paths.sagas,
			"@store": paths.store,
			"@reduxTypes": paths.reduxTypes,
			"@history": paths.history
		}
	}
};

export default config;

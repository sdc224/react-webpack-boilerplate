import path from "path";
import fs from "fs";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
	path.resolve(appDirectory, relativePath);

const paths = {
	nodeModules: resolveApp("node_modules"),
	build: resolveApp("build"),
	dotenv: resolveApp(".env"),
	app: resolveApp("/"),
	src: resolveApp("src"),
	types: resolveApp("node_modules/@types"),
	appTypes: resolveApp("src/@types"),
	publicPath: "/",
	resolveModules: [resolveApp("src"), "node_modules"],
	assets: resolveApp("src/assets"),
	images: resolveApp("src/assets/images"),
	theme: resolveApp("src/assets/theme"),
	components: resolveApp("src/components"),
	containers: resolveApp("src/containers"),
	routes: resolveApp("src/routes"),
	layouts: resolveApp("src/layouts"),
	views: resolveApp("src/views"),
	utils: resolveApp("src/utils"),
	actions: resolveApp("src/actions"),
	reducers: resolveApp("src/reducers"),
	selectors: resolveApp("src/selectors"),
	sagas: resolveApp("src/sagas"),
	store: resolveApp("src/store"),
	reduxTypes: resolveApp("src/reduxTypes"),
	history: resolveApp("src/history")
};

export default paths;

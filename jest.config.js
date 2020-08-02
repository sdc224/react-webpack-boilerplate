module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleDirectories: ["node_modules", "bower_components", "shared"],
	setupFilesAfterEnv: ["<rootDir>/test/config/importJestDOM.ts"],
	moduleNameMapper: {
		"^@app(.*)$": "<rootDir>$1",
		"^@src(.*)$": "<rootDir>/src$1",
		"^@types/*": "<rootDir>/src/@types$1",
		"^@assets(.*)$": "<rootDir>/src/assets$1",
		"^@images(.*)$": "<rootDir>/src/assets/images$1",
		"^@theme(.*)$": "<rootDir>/src/assets/theme$1",
		"^@components(.*)$": "<rootDir>/src/components$1",
		"^@containers(.*)$": "<rootDir>/src/containers$1",
		"^@views(.*)$": "<rootDir>/src/views$1",
		"^@layouts(.*)$": "<rootDir>/src/layouts$1",
		"^@routes(.*)$": "<rootDir>/src/routes$1",
		"^@actions(.*)$": "<rootDir>/src/actions$1",
		"^@reducers(.*)$": "<rootDir>/src/reducers$1",
		"^@selectors(.*)$": "<rootDir>/src/selectors$1",
		"^@sagas(.*)$": "<rootDir>/src/sagas$1",
		"^@store(.*)$": "<rootDir>/src/store$1",
		"^@reduxTypes(.*)$": "<rootDir>/src/reduxTypes$1",
		"^@utils(.*)$": "<rootDir>/src/utils$1",
		"^@history(.*)$": "<rootDir>/src/history$1"
	}
};

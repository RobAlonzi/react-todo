var webpackConfig = require("./webpack.config.js");

module.exports = function(config){
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ["mocha"],
		files: [
			"./src/tests/**/*.test.jsx",
			"./node_modules/jquery/dist/jquery.min.js",
    		"./node_modules/foundation-sites/dist/js/foundation.min.js"
			],
		preprocessors: {
			'./src/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		//reporters: ["mocha"],
		reporters: ["mocha", "progress"],
		client: {
			captureConsole: true,
			mocha: {
				timeout: "5000"
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};
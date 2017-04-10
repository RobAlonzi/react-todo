var webpack = require("webpack");
var path = require("path");

const VENDOR_LIBS = [
  "jquery", "foundation-sites"
];

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: {
		vendor: VENDOR_LIBS,
		bundle: "./src/app.jsx",
		jquery: "script-loader!jquery/dist/jquery.min.js",
    	foundation: "script-loader!foundation-sites/dist/js/foundation.min.js"
	},

	output: {
		path: path.join(__dirname, "public"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$ : 'jquery',
			jQuery: 'jquery',

		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings:false
			}
		})
	],
	externals: {
		foundation: 'Foundation',
		jquery: 'jQuery'
	},
	devtool: process.env.NODE_ENV === "production" ?  undefined : "cheap-module-eval-source-map"
}
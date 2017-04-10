var webpack = require("webpack");
var path = require("path");
var envFile = require("node-env-file");

const VENDOR_LIBS = [
  "jquery", "foundation-sites"
];

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
	envFile(path.join(__dirname, "config/" + process.env.NODE_ENV + ".env"));
}catch(e){

}

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
		}),
		new webpack.DefinePlugin({
			"process.env":{
				NODE_ENV : JSON.stringify(process.env.NODE_ENV),
				API_KEY : JSON.stringify(process.env.API_KEY),
				AUTH_DOMAIN : JSON.stringify(process.env.AUTH_DOMAIN),
				DATABASE_URL : JSON.stringify(process.env.DATABASE_URL),
				PROJECT_ID : JSON.stringify(process.env.PROJECT_ID),
				STORAGE_BUCKET : JSON.stringify(process.env.STORAGE_BUCKET),
				MESSAGING_SENDER_ID : JSON.stringify(process.env.MESSAGING_SENDER_ID)
			}
		})
	],
	externals: {
		foundation: 'Foundation',
		jquery: 'jQuery'
	},
	devtool: process.env.NODE_ENV === "production" ?  undefined : "cheap-module-eval-source-map"
}
var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
			"script-loader!jquery/dist/jquery.min.js",
			"script-loader!foundation-sites/dist/js/foundation.min.js",
			"./app/app.jsx"],
	externals: {
		jquery: 'jQuery'

	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		alias: {
			//AliasName: path.resolve(__dirname, './alias/path'),
			Main: 				path.resolve(__dirname, './app/component/Main'),
			Nav: 				path.resolve(__dirname, './app/component/Nav'),
			Weather: 			path.resolve(__dirname, './app/component/Weather'),
			About: 				path.resolve(__dirname, './app/component/About'),
			Examples: 			path.resolve(__dirname, './app/component/Examples'),
			WeatherForm: 		path.resolve(__dirname, './app/component/WeatherForm'),
			WeatherMessage: 	path.resolve(__dirname, './app/component/WeatherMessage'),
			ErrorModal: 		path.resolve(__dirname, './app/component/ErrorModal'),
			OpenWeatherMap: 	path.resolve(__dirname, './app/api/OpenWeatherMap'),
			applicationStyles: 	path.resolve(__dirname, './app/styles/app.css')
		},
		extensions: ["*",".js",".jsx"]
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-0"]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: "eval-source-map"
}
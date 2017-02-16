var path = require('path');

module.exports = {
	entry: "./app/app.jsx",
	output: {
		path: __dirname,
		filename: "./public/bundle.js"
	},
	resolve: {
		alias: {
			//AliasName: path.resolve(__dirname, './alias/path'),
			Main: 			path.resolve(__dirname, './app/component/Main'),
			Nav: 			path.resolve(__dirname, './app/component/Nav'),
			Weather: 		path.resolve(__dirname, './app/component/Weather'),
			About: 			path.resolve(__dirname, './app/component/About'),
			Examples: 		path.resolve(__dirname, './app/component/Examples'),
			WeatherForm: 	path.resolve(__dirname, './app/component/WeatherForm'),
			WeatherMessage: path.resolve(__dirname, './app/component/WeatherMessage'),
			OpenWeatherMap: path.resolve(__dirname, './app/api/OpenWeatherMap')
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
	devtool: "cheap-module-eval-source-map"
}
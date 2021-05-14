const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		reactBootstrap: '/src/js/start.js'
	},
	output: {
		path: path.resolve(__dirname, 'target'),
		filename: '[name]-v0.0.2.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
						loader: 'babel-loader',
						options:{
							presets: ['@babel/react'],
							plugins: ['@babel/plugin-proposal-object-rest-spread']
						}
				}
			},
			{
				test:/\.css$/,
				use:[
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				use:[
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader'
					}	
					
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/first.html'
		}),
	],
	mode: 'development',
	cache: true,
	resolve: {
		extensions: ['.js', '.jsx', '.html', '.scss','.css']
	},
}
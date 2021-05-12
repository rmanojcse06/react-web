# Tutorial to create :electron: ReactJS project without npx extension.

This is a sample hobby project created by Manoj Ravikumar (:e-mail: mailto:rmanojcse06@gmail.com)

### Step 1: Initialize the project
Create a node.js project using npm installed on your device.
>`npm init -y`

### Step 2: Install development dependencies.
1. Install Babel core, CLI, loader, presets for transpiling code (https://babeljs.io/docs/en/babel-preset-react)
>`npm install --save-dev babel-loader @babel/cli @babel/core @babel/plugin-proposal-object-rest-spread @babel/preset-react` 
2. Install Webpack core, CLI, dev-server, loader, plugins for builing code (https://webpack.js.org/loaders/) 
>`npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin`
3. Adding sass for css builder
>`npm install --save-dev sass sass-loader`
4. Add Axios for consuming REST API
>`npm install axios`
5. Add React, ReactDOM and Redux 
>`npm install react react-dom react-redux`

### Step 3: Make node.js folder structure

1. Create 3 files in the root (react-web/) folder
	- :clipboard: package.json		- project object model of node project
	- :clipboard: webpack.config.js		- webpack dependency manager configuration
	- :clipboard: .babelrc 			- babel configuration file
	
2. Please find the basic project structure to be created to execute the file:  	

- :open_file_folder: react-web/
	- :open_file_folder: src/
		- :open_file_folder: js/
			- :open_file_folder: components/
				- :clipboard: App.jsx		
			- :clipboard: start.js (main entry point)
		- :pushpin: first.html 	
	- :clipboard: package.json
	- :clipboard: webpack.config.js
	- :clipboard: .babelrc


### Step 4: Create opening file `first.html` as follows

Create first.html inside src directory for render html, which is the single page application.

> type nul > src/first.html

Update the contents as follows:

	`
		<!DOCTYPE html>
		<html>
			<head><title>My React App</title></head>
			<body>
				<div id="root"></div>
				<script src='target/react-web-v0.0.1.js' />
			</body>
		</html>
	`

You can see that there is only javascript file including in render html page, it is `target/react-web-v0.0.1.js` which will be created in *Step 8* below.


### Step 5: Create your first react component in `src/js/components/App.js` as follows

Create `App.js` inside `src/js/components` folder.to load React javascript framework.

> type nul > src/js/components/App.js

Update the contents as follows:

	`
		import React, { Component } from 'react';
		class App extends Component {
			render(){
				return(
					<div>
						<h1>Hello World</h1>
					</div>
				);
			}
		}
		export default App;
	`

### Step 6: Create entry point page in `src/js/start.js` as follows

Create start.js inside `src/js` to load React javascript framework.

> type nul > src/js/start.js

Update the contents as follows:
- *You can see that contents of `App.js` will fill up the root element id in* `first.html` 

	`
		const React = require('react');
		const ReactDOM = require('react-dom');
		import App from './components/App.js';
		ReactDOM.render(<App/>, document.getElementById('root'));
	`


### Step 7: Configure .babelrc

Before using webpack, we can also use babel-cli to to check if the file is transpiling.
To do so, Create file .babelrc and add the following line in it

> type nul > .babelrc

	`
		{
   			"presets":["@babel/preset-react"]
		}
	`

> npx babel src --out-dir dist
Following output will be displayed after transpiling `src\js\start.js` and `src\js\components\App.jsx`
` Successfully compiled 2 files with Babel (710ms) `

### Step 8: Configure webpack.config.json.

We are going to take entry file from `./src/js/start.js`. 
We are going to render opening page from file `./src/first.html` using webpack html plugin.
We are need to load *sass* and *babel* for _styling_ and _transpiling_


Please find the full source to do it.
Use the following link to learn more: https://webpack.js.org/concepts/

> type nul > webpack.config.js

	`
		const path 	= require('path')
		const webpack	= require('webpack')
		const HtmlWebpackPlugin = require('html-webpack-plugin')
		
		module.exports = {
			entry: {main: './src/js/start.js'},
			output: {path: path.resolve(__dirname__,'target'), filename:'react-web-v0.0.1.js'},
			plugins: [
				new HtmlWebpackPlugin(
					{template: './src/first.html'}
				)
			],
			module: {
				rules:[
					{
						test:\/.js?$\,
						exclude:/node_modules,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-react'],
							}
						}
					},
					{
						test:\/.css$\,
						exclude:/node_modules,
						use: [
							{
								loader: 'sass-loader'
							},
							{
								loader: 'css-loader',
								options: {
									modules: true
								}
							}
						]
					}
				]
			},
			mode: 'development',
		};
	`	

After creating `webpack.config.js`, you can build the code using webpack cli in node runtime.

> npx run webpack 

If you got any error then wait till entry point and files are been created.




 ### Step 9: Start the application
 
 Now you can run the html page using `webpack-dev-server` which can be done using the following command.
 
 > npx webpack serve --mode development --open --hot --port 8085

 So, that application will be running on localhost:8085 port.
 
 ### Step 10: Update the scripts in package.json
 
 You can also configure the build and start-server on `package.json` also.


 
#### By *MANOJ RAVIKUMAR*, :india:	
																		
						### JESUS ✝️ LOVES ❤️ YOU 👇 ###

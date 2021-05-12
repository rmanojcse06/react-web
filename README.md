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


### Step 4: Configure webpack.config.json.

We are going to take entry file from `./src/js/start.js`. 
We are need to load *sass* and *babel* for _styling_ and _transpiling_
We are going to open index html file from `./src/first.html` using webpack html plugin.

Please find the full source to do it.
> type nul > webpack.config.js

	`
		const path 	= require('path')
		const webpack	= require('webpack')
		const HtmlWebpackPlugin = require('html-webpack-plugin')
		
		
	`


 
#### By *MANOJ RAVIKUMAR*, :india:	
																		
						### JESUS ✝️ LOVES ❤️ YOU 👇 ###

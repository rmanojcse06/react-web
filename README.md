
npm init -y

##################################################### DEVELOPMENT SERVER ########################################################

npm install --save-dev babel-loader @babel/cli @babel/core @babel/plugin-proposal-object-rest-spread @babel/preset-react 

npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin

npm install --save-dev sass sass-loader

##################################################################################################################################



###################################################### PRODUCTION SERVER ########################################################

npm install axios

npm install react react-dom react-redux

##################################################################################################################################










###################################################### package.json ###############################################################

"scripts": {
	"build": "webpack --mode development",
	"start-dev": "webpack serve --mode development --open --hot --host localhost --port 8085"
}

> npm run build 
> npx webpack serve --mode development --open --hot --host localhost --port 8085

##################################################################################################################################

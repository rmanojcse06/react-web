# Tutorial to create Styling components using Sass.


### Step 1: Pull the Git code from github

Please find the following commands to load sass-update branch in your local repository.

	`
		git init
		git remote add origin https://github.com/rmanojcse06/react-web.git
		git fetch
		git checkout origin/sass-update
	`

### Step 2: Load as a node.js project

Initialize a node project using the following command
> npm init
 
Load node_modules using the following command
> npm install

Check if babel transpiling is correct before building
> npx babel src --out-dir dist

Once all the modules are loaded, Type the following command
> npx run build


### Step 3: Test the application is working
 
 Now you can run the html page using `webpack-dev-server` which can be done using the following command.
 
 > npx run start-dev-server

 So, that application will be running on localhost:8084 port.
 

### Step 4: Adding SASS plugins.

Add the sass plugin into the project based on the tutorial link in https://webpack.js.org/loaders/sass-loader/#extracts-css-into-separate-files

> npm install --save-dev mini-css-extract-plugin 
> npm install --save-dev sass-loader style-loader css-loader node-sass


### Step 5: Add the following line in webpack configuration

The below line to be added with module exports will make the file as to import style sheets without extensions.

`
	resolve: {
		extensions: ['.js', '.jsx', '.html', '.scss','.css']
	}
`

Other wise the following error will be caught,
`
	Field 'browser' doesn't contain a valid alias configuration
`

### Step 6: Project Folder structure:

Please find the basic project structure to be created to execute the file:  	

- :open_file_folder: react-web/
	- :open_file_folder: src/
		- :open_file_folder: js/
			- :open_file_folder: components/
				- :clipboard: App.jsx		
			- :clipboard: start.js (main entry point)
		- :open_file_folder: styles/
			- :open_file_folder: sass/
				- :open_file_folder: common/
					- :pushpin: my-style.scss
				- :open_file_folder: header/
				- :open_file_folder: footer/		
		- :clipboard: first.html 	
	- :clipboard: package.json
	- :clipboard: webpack.config.js
	- :clipboard: .babelrc



### Step 7: Now you can create sass file and link it to your react component.

Please find `src/styles/sass/common/mystyle.scss`,  

`
	$bgColor: lightblue;
	$txtColor: darkblue;
	$defaultFontSz: 18px;
	$fontMap: (
		"v-small": 8px,
		"small": 12px,
		"medium": 18px,
		"large": 24px,
		"v-large": 30px
	);

	/* Use the variables */
	body {
		background-color: $bgColor;
		color: $txtColor;
		font-size: $defaultFontSz;
	}
`

Please find `src/js/components/App.jsx` as follows:

`
		import styles from '../../styles/sass/common/my-style'

		class App extends Component{
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
 
#### By *MANOJ RAVIKUMAR*, :india:	
																		
						### JESUS ✝️ LOVES ❤️ YOU 👇 ###

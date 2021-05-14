import React from 'react';


class MiddleComponent extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside MiddleComponent >> "+this.props);
		
	}
	render(){
		return(
			<div>
				Middle Space
				{this.props.children}
			</div>
		);
	}
}

class MainComponent extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside MiddleComponent >> "+this.props);
		
	}
	render(){
		return(
			<div>
				Main Space
			</div>
		);
	}
}


class MiddleLeft extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside MiddleLeft >> "+this.props);
		
	}
	render(){
		return(
			<div>
				Middle Left Space
			</div>
		);
	}
}

class MiddleRight extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside MiddleRight >> "+this.props);
		
	}
	render(){
		return(
			<div>
				Middle Right Space
			</div>
		);
	}
}

export {MiddleComponent,MiddleRight,MiddleLeft,MainComponent};



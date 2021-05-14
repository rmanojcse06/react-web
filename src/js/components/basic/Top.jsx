import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


class TopComponent extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside TopComponent >> "+this.props);
		
	}
	render(){
		return(
			<div className="header-page header-font">
				<Breadcrumb>
				  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
				  <Breadcrumb.Item href="https://react-bootstrap.github.io/components/breadcrumb/">Library</Breadcrumb.Item>
				  <Breadcrumb.Item active>Data</Breadcrumb.Item>
				</Breadcrumb>
				<p>
					This is top space
				</p>
			</div>
		);
	}
}
export default TopComponent;


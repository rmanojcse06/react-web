import React from 'react';
import Badge from 'react-bootstrap/Badge';

class BottomComponent extends React.Component {
	constructor(props){
		super(props);
		console.log("Inside BottomComponent >> "+this.props);
		
	}
	render(){
		return(
			<div className="footer-page footer-font">
				<Badge pill variant="primary">
					Primary
				</Badge>
				{' '}
				<p className="header-font">
					This is bottom space
				</p>
			</div>
		);
	}
}
export default BottomComponent;


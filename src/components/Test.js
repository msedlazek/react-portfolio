import React, { Component } from 'react';

class Test extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		random: ""
    		};
  	}

	componentDidMount() {
		alert("this works.")
	}

	render() {
		return (
			<div>
				<h2>I'm Mr Meeseeks look at me!</h2>
			</div>
		);
	}

}

export default Test;
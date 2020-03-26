import React from 'react';
import { styles } from './styles';
import { Helper } from './helper';

let helper;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		// Passing pageObject reference 'this' to helper
		helper = new Helper(this);
	}

	componentDidMount() {
		// Loading initial state
		helper.initHelper();
	}

	render() {
		return (
			<div style={styles.headerContainer}>{this.state.title}</div>
		);
	}
}

export default Header;
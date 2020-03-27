import React from 'react';
import './styles.css';
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
			<div id={helper.getHeaderType()} className='headerContainer'>
				<a href={helper.getTitleLink()} className='titleLabel' style={helper.getTitleFont()}>
					{helper.getTitleLabel()}
				</a>
				<ul className='navWrapper'>
					{
						helper.getNavs().map(nav => {
							return (
								<li className='navItem' key={nav.label}><a className='navLink' href={nav.link}>{nav.label}</a></li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

export default Header;
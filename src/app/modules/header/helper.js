

export class Helper {
	pageObj = null;
	state = {
		title: 'Header'
	}

	constructor (pageObj) {
		this.pageObj = pageObj;
	}

	// Function to set initial state value
	initHelper = () => {
		this.pageObj.setState(this.state);
	}

	// Function to update state on input value enter
	updateInputValue = (ref, value) => {
		this.pageObj.setState({ [ref]: value });
	}

};
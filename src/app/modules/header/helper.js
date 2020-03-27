export class Helper {
	pageObj = null;
	state = {
		type: 'default'
	}

	constructor (pageObj) {
		this.pageObj = pageObj;
	}

	// Function to set initial state value
	initHelper = () => {
		this._loadProps();
		this.pageObj.setState(this.state);
	}

	/**
	 * @author Nikhil Thakur
	 * @name _loadProps
	 * @desc Load the properties of the header
	 */
	_loadProps = () => {
		this._setType();
		this._setTitle();
		this._setNavs();
	}

	/**
	 * @author Nikhil Thakur
	 * @name _setType
	 * @desc Set the type of header
	 */
	_setType = () => {
		if (this.pageObj.props.type) {
			this.state.type = this.pageObj.props.type;
		}
	}

	/**
	 * @author Nikhil Thakur
	 * @name _setTitle
	 * @desc Set the title
	 */
	_setTitle = () => {
		if (this.pageObj.props.title) {
			this.state.title = this.pageObj.props.title;
		}
	}

	/**
	 * @author Nikhil Thakur
	 * @name _setNavs
	 * @desc Set the navigation links
	 */
	_setNavs = () => {
		if (this.pageObj.props.navs) {
			this.state.navs = this.pageObj.props.navs;
		}
	}

	getTitleLabel = () => {
		if ((this.state.title || {}).label) {
			return this.state.title.label;
		}
		return '';
	}

	getTitleLink = () => {
		if ((this.state.title || {}).link) {
			return this.state.title.link;
		}
		return '#';
	}

	getTitleFont = () => {
		if ((this.state.title || {}).font) {
			return this.state.title.font;
		}
		return {};
	}

	getHeaderType = () => {
		return this.state.type;
	}

	getNavs = () => {
		return this.state.navs ? this.state.navs : [];
	}

	// Function to update state on input value enter
	updateInputValue = (ref, value) => {
		this.pageObj.setState({ [ref]: value });
	}

};
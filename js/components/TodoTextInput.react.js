import React from 'react';

const ENTER_KEY_CODE = 13;

export class TodoTextInput extends React.Component {
	constructor (props) {
		super(props);
		this.state = {value: this.props.value || ''};
	}

	render () {
		return(
			<input
				className = {this.props.className}
				id = {this.props.id}
				placeholder = {this.props.placeholder}
				onBlur = {this._save}
				onChange = {this._onChange}
				onKeyDown = {this._onKeyDown}
				value = {this.state.value}
				autoFocus = {true}
			/>
		);
	}
	_save = () => {
		this.props.onSave(this.state.value);
		this.setState({value: ''});
	}

	_onChange = (event) => {
		this.setState({value: event.target.value});
	}

	_onKeyDown = (event) => {
		if(event.keyCode === ENTER_KEY_CODE){
			this._save();
		}
	}
}
TodoTextInput.propTypes = {
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onSave: React.PropTypes.func.isRequired,
	value: React.PropTypes.string
};










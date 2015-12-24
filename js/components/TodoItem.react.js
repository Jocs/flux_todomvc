import React from 'react';
import {TodoActions} from '../actions/TodoActions';
import {TodoTextInput} from './TodoTextInput.react';
import classNames from 'classnames';

export class TodoItem extends React.Component {
	constructor (props) {
		super(props);
		this.state = {isEditing: false};
	}
	render () {
		let todo = this.props.todo;
		let input;
		if(this.state.isEditing){
			input = <TodoTextInput
				className = 'edit'
				onSave = {this._onSave}
				value = {todo.text}
			/>
		}

		return (
			<li
				className = {classNames({
					'completed': todo.complete,
					'editing': this.state.isEditing
				})}
				key={todo.id}
			>
				<div className='view'>
					<input className='toggle' 
					type='checkbox' 
					checked={todo.complete} 
					onChange={this._onToggleComplete}/>
					<label onDoubleClick={this._onDoubleClick}>{todo.text}</label>
					<button className='destroy' onClick={this._onDestroyClick}/>
				</div>
				{input}
			</li>
		);
	}
	_onToggleComplete = () =>{
		TodoActions.toggleComplete(this.props.todo);
	}
	_onDoubleClick = () => {
		this.setState({isEditing: true});
	}
	_onSave = (text) => {
		TodoActions.updateText(this.props.todo.id, text);
		this.setState({isEditing: false});
	}
	_onDestroyClick = () => {
		TodoActions.destroy(this.props.todo.id);
	}
}
TodoItem.propTypes = {
	todo: React.PropTypes.object.isRequired
};










import {Footer} from './Footer.react';
import {Header} from './Header.react';
import {MainSection} from './MainSection.react';
import React from 'react';
import {TodoStore} from '../stores/TodoStore';

let getTodoState = () => {
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	};
};

export class TodoApp extends React.Component {
	constructor (props) {
		super(props);
		this.state = getTodoState();
	}
	componentDidMount () {
		TodoStore.addChangeListener(this._onChange);
	}
	componentsWillUnmount () {
		TodoStore.removeChangeListener(this._onChange);
	}
	render () {
		return (
			<div>
				<Header/>
				<MainSection 
					allTodos = {this.state.allTodos}
					areAllComplete = {this.state.areAllComplete}
				/>
				<Footer allTodos={this.state.allTodos}/>
			</div>
			);
	}
	_onChange = () => {
		this.setState(getTodoState());
	}
}












import ReactDOM  from 'react-dom';
import React from 'react';
import {TodoApp} from './components/TodoApp.react';

ReactDOM.render(
	<TodoApp/>,
	document.querySelector('#todoapp')
);
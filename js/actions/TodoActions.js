import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {TodoConstants} from '../constants/TodoConstants';

export let TodoActions = {
	create (text) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_CREATE,
			text
		});
	},
	updateText (id, text) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_UPDATE_TEXT,
			id,
			text
		});
	},
	toggleComplete (todo) {
		let id = todo.id,
				actionType = todo.complete ? TodoConstants.TODO_UNDO_COMPLETE : TodoConstants.TODO_COMPLETE;
		AppDispatcher.dispatch({
			actionType,
			id
		});
	},
	toggleCompleteAll () {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
		});
	},
	destroy (id) {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_DESTROY,
			id
		});
	},
	destroyCompleted () {
		AppDispatcher.dispatch({
			actionType: TodoConstants.TODO_DESTROY_COMPLETED
		});
	}
};













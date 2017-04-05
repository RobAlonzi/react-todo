var redux = require("redux");

var {searchTextReducer, showCompletedReducer, todosReducer } = require("../reducers/reducers.jsx");

export var configure = () => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	})

	var store = redux.createStore(reducer, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
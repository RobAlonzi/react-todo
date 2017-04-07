import * as redux from "redux";
import thunk from "redux-thunk";
import {searchTextReducer, showCompletedReducer, todosReducer } from "../reducers/reducers.jsx";

export var configure = (initalState = {}) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	})

	var store = redux.createStore(reducer, initalState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}
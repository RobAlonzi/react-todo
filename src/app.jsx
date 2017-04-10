var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

import TodoApp from "./components/TodoApp.jsx";
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
var TodoAPI = require("./api/TodoAPI.jsx");

import Login from "./components/Login.jsx";


// store.subscribe(() => {
// 	var state = store.getState();
// 	console.log("New state: ", state);
// 	TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());


//Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App CSS
require("style-loader!css-loader!sass-loader!./styles/app.scss");

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" >
				<Route path="todos" component={TodoApp} />
				<IndexRoute component={Login} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
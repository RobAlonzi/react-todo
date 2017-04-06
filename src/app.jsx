var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var TodoApp = require("./components/TodoApp.jsx");
var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
var TodoAPI = require("./api/TodoAPI.jsx");

store.subscribe(() => {
	var state = store.getState();
	console.log("New state: ", state);
	TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


//Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App CSS
require("style-loader!css-loader!sass-loader!./styles/app.scss");

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);
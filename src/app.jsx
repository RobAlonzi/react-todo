var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();

var TodoApp = require("./components/TodoApp.jsx");


store.subscribe(() => {
	console.log("New state: ", store.getState());
});


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
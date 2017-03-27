var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");

var TodoApp = require("./components/TodoApp.jsx");


//Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App CSS
require("style-loader!css-loader!sass-loader!./styles/app.scss");

ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
);
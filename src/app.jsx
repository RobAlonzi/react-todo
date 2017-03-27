var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");


//Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

//App CSS
require("style-loader!css-loader!sass-loader!./styles/app.scss");

ReactDOM.render(
	<p>Boilerplate3 Project</p>,
	document.getElementById('app')
);
var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var { hashHistory } = require("react-router");

var actions = require("./actions/actions.jsx");
var store = require("./store/configureStore.jsx").configure();
import firebase from "./firebase/index";
import router from "./router/index.jsx";

firebase.auth().onAuthStateChanged((user) => {
	if(user){
		hashHistory.push('/todos');
	}else{
		hashHistory.push("/");
	}
});

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
		{router}
	</Provider>,
	document.getElementById('app')
);
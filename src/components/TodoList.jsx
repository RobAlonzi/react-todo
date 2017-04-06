var React = require("react");
var { connect } = require("react-redux");
import Todo from "./Todo.jsx";
var TodoAPI = require("../api/TodoAPI.jsx");


export var TodoList = React.createClass({

	render: function(){
		var {todos, showCompleted, searchText } = this.props;

		if(todos.length === 0){
			return (
				<p className="container__message">Nothing to do...</p>
			);
		}

		var renderTodos = () => { 
			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
				return (
					<Todo key={todo.id} {...todo} />
				);
			});
		}

		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	}
)(TodoList);

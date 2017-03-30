var React = require("react");
var Todo = require("./Todo.jsx");


var TodoList = React.createClass({

	render: function(){
		var {todos} = this.props;

		if(todos.length === 0){
			return (
				<p className="container__message">Nothing to do...</p>
			);
		}

		var renderTodos = () => {
			return todos.map((todo) => {
				return (
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
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

module.exports = TodoList;
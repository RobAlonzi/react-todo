var React = require("react");


var TodoForm = React.createClass({

	onSubmit: function(e){
		e.preventDefault();
		var todo = this.refs.todo.value;

		if(todo.length > 0){
			this.refs.todo.value = "";
			this.props.onAddTodo(todo);
		}else{
			this.refs.todo.focus();
		}
	},

	render: function(){

		return (
			<div>
				<form ref="form" onSubmit={this.onSubmit} className="todo-form">
					<input type="text" ref="todo" placeholder="Enter a new task" />
					<button className="button expanded">Add</button>
				</form>
			</div>
		);
	}
});

module.exports = TodoForm;
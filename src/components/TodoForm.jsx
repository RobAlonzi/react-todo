var React = require("react");
var {connect} = require("react-redux");
var actions = require("../actions/actions.jsx");


export var TodoForm = React.createClass({

	onSubmit: function(e){
		e.preventDefault();
		var {dispatch} = this.props;
		var todo = this.refs.todo.value;

		if(todo.length > 0){
			this.refs.todo.value = "";
			dispatch(actions.addTodo(todo));
		}else{
			this.refs.todo.focus();
		}
	},

	render: function(){

		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.onSubmit} className="todo-form">
					<input type="text" ref="todo" placeholder="Enter a new task" />
					<button className="button expanded">Add</button>
				</form>
			</div>
		);
	}
});

export default connect()(TodoForm);
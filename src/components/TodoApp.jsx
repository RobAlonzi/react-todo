var React = require("react");

var TodoList = require("./TodoList.jsx");
var TodoForm = require("./TodoForm.jsx");


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the yard'
				},
				{
					id: 3,
					text: 'Clean the dishes'
				},
				{
					id: 4,
					text: 'Go to the gym'
				}
			]
		}
	},

	handleAddTodo: function(text){
		alert("new todo: " + text);
	},

	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<h1>ToDoApp.jsx</h1>
				<TodoList todos={todos} />
				<TodoForm onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
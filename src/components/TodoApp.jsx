var React = require("react");

var TodoList = require("./TodoList.jsx");
var TodoForm = require("./TodoForm.jsx");
var TodoSearch = require("./TodoSearch.jsx");


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: "",
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

	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<h1>ToDoApp.jsx</h1>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<TodoForm onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
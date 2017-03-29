var React = require("react");
var uuid = require("uuid/v4");

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
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Clean the dishes'
				},
				{
					id: uuid(),
					text: 'Go to the gym'
				}
			]
		}
	},

	handleAddTodo: function(text){
		this.setState({
			todos: [...this.state.todos, { id: uuid(), text: text }]
		});
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
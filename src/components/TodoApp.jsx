var React = require("react");
var uuid = require("uuid/v4");

var TodoList = require("./TodoList.jsx");
var TodoForm = require("./TodoForm.jsx");
var TodoSearch = require("./TodoSearch.jsx");
var TodoAPI = require("../api/TodoAPI.jsx");


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: "",
			todos: TodoAPI.getTodos()
		}
	},
	componentDidUpdate: function(){
		TodoAPI.setTodos(this.state.todos);
	},
	handleAddTodo: function(text){
		this.setState({
			todos: [
				...this.state.todos, 
				{ 
					id: uuid(), 
					text: text,
					completed: false
			 	}
			]
		});
	},

	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos})
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
				<TodoList todos={todos} onToggle={this.handleToggle}/>
				<TodoForm onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
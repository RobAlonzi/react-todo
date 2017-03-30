var React = require("react");
var uuid = require("uuid/v4");
var moment = require("moment");

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
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
			 	}
			]
		});
	},

	handleToggle: function(id){
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
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
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos =  TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
			<div>
				<h1>ToDoApp.jsx</h1>
				<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				<TodoForm onAddTodo={this.handleAddTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;
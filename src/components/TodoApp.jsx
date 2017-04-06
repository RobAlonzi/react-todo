var React = require("react");
var uuid = require("uuid/v4");
var moment = require("moment");

import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
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
				<h1 className="page-title">ToDo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch onSearch={this.handleSearch} />
							<TodoList />
							<TodoForm onAddTodo={this.handleAddTodo} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TodoApp;

import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo.jsx";
import TodoAPI from "../api/TodoAPI.jsx";

export class TodoList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {todos, showCompleted, searchText } = this.props;
		let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		if(filteredTodos.length === 0){
			return (
				<p className="container__message">Nothing to do...</p>
			);
		}

		let renderTodos = () => { 
			return filteredTodos.map((todo) => {
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

}

export default connect(
	(state) => {
		return state;
	}
)(TodoList);

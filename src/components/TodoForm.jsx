import React from "react";
import {connect} from "react-redux";

import * as actions from "../actions/actions.jsx";


export class TodoForm extends React.Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e){
		e.preventDefault();
		let {dispatch} = this.props;
		let todo = this.refs.todo.value;

		if(todo.length > 0){
			this.refs.todo.value = "";
			dispatch(actions.startAddTodo(todo));
		}else{
			this.refs.todo.focus();
		}
	}

	render(){
		return (
			<div className="container__footer">
				<form ref="form" onSubmit={this.onSubmit} className="todo-form">
					<input type="text" ref="todo" placeholder="Enter a new task" />
					<button className="button expanded">Add</button>
				</form>
			</div>
		);
	}
}

export default connect()(TodoForm);
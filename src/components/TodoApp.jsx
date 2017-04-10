import React from "react";
import * as Redux from "react-redux";

import * as actions from "../actions/actions.jsx";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoSearch from "./TodoSearch.jsx";


export var TodoApp = React.createClass({
	onLogout(e){
		var { dispatch } = this.props;
		e.preventDefault();
		dispatch(actions.startLogout());
	},
	render(){
		return (
			<div>
				<div className="page-actions">
					<a onClick={this.onLogout} href="#">Logout</a>
				</div>
				<h1 className="page-title">ToDo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch/>
							<TodoList/>
							<TodoForm/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Redux.connect()(TodoApp);

import React from "react";
import {connect} from "react-redux";
import moment from "moment";

import * as actions from "../actions/actions.jsx";


export class Todo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		let todoClassName = completed ? "todo todo-completed" : "todo";
		let renderDate = () =>{
			let message = "Created";
			let timestamp = createdAt;

			if(completed){	
				message = "Completed";
				timestamp = completedAt;
			}

			return `${message} ${moment.unix(timestamp).format("MMM Do YYYY @ h:mm a")}`;
		}
		return (
			<div onClick={() => { dispatch(actions.startToggleTodo(id, !completed)) }} className={todoClassName}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subtext">{renderDate()}</p>
				</div>
			</div>
		);
	}
};

export default connect()(Todo);
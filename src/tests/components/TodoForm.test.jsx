var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

import * as actions from "../../actions/actions.jsx";
import {TodoForm} from "../../components/TodoForm.jsx";

describe("TodoForm", () => {
	it("should exist", () => {
		expect(TodoForm).toExist();
	});

	it("should dispatch ADD_TODO when valid todo text", () => {
		var todoText = "New Task";
		var action = actions.startAddTodo(todoText);

		var spy = expect.createSpy();
		var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />);
		var el = ReactDOM.findDOMNode(todoForm);

		todoForm.refs.todo.value = todoText;
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toHaveBeenCalledWith(action);

	});	 

	it("should not dispatch ADD_TODO when invalid todo text", () => {
		var spy = expect.createSpy();
		var todoForm = TestUtils.renderIntoDocument(<TodoForm dispacth={spy} />);
		var el = ReactDOM.findDOMNode(todoForm);

		todoForm.refs.todo.value = "";
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toNotHaveBeenCalled();

	});	
})
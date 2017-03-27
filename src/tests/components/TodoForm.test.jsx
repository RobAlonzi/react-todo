var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoForm = require("../../components/TodoForm.jsx");

describe("TodoForm", () => {
	it("should exist", () => {
		expect(TodoForm).toExist();
	});

	it("should call onAddTodo if valid todo entered", () => {
		var spy = expect.createSpy();
		var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
		var el = ReactDOM.findDOMNode(todoForm);

		todoForm.refs.todo.value = "New Task";
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toHaveBeenCalledWith("New Task");

	});	

	it("should not call onAddTodo if blank todo entered", () => {
		var spy = expect.createSpy();
		var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
		var el = ReactDOM.findDOMNode(todoForm);

		todoForm.refs.todo.value = "";
		TestUtils.Simulate.submit(el.querySelector("form"));

		expect(spy).toNotHaveBeenCalled();

	});	
})
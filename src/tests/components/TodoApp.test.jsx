var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("../../components/TodoApp.jsx");

describe("TodoApp", () => {
	it("should exist", () => {
		expect(TodoApp).toExist();
	});

	it("should add todo to the todos state on handleAddTodo", () => {
		var todoText = "test text";
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});

		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);

	});
})
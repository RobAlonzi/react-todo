var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoList = require("../../components/TodoList.jsx");
var Todo = require("../../components/Todo.jsx");

describe("TodoList", () => {
	it("should exist", () => {
		expect(TodoList).toExist();
	});

	it("should render one Todo component for each todo item", () => {
		var todos = [{id: 1, text: "Do something"}, {id: 2, text: "Check mail"}];

		var toDoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
})
var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");


import * as actions from "../../actions/actions.jsx";
import { Todo } from "../../components/Todo.jsx";

describe("Todo", () => {
	it("should exist", () => {
		expect(Todo).toExist();
	});

	it("should dispatch UPDATE_TODO action on click", () => {
		var todoData = {
			id: 'abc123',
			text: "write todo.tst.jsx test",
			completed: true
		};

		var action = actions.startToggleTodo(todoData.id, !todoData.completed);

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
		var el = ReactDOM.findDOMNode(todo);
		TestUtils.Simulate.click(el);

		expect(spy).toHaveBeenCalledWith(action);
	});
})
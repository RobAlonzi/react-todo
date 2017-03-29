var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var Todo = require("../../components/Todo.jsx");

describe("Todo", () => {
	it("should exist", () => {
		expect(Todo).toExist();
	});

	it("should call on onToggle prop with id on click", () => {
		var todoData = {
			id: 199,
			text: "write todo.tst.jsx test",
			completed: true
		};

		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
		var el = ReactDOM.findDOMNode(todo);

		console.log(el);

		TestUtils.Simulate.click(el);
		expect(spy).toHaveBeenCalledWith(199);
	});
})
var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var Todo = require("../../components/Todo.jsx");

describe("Todo", () => {
	it("should exist", () => {
		expect(Todo).toExist();
	});
})
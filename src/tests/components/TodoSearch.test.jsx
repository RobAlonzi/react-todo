var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoSearch = require("../../components/TodoSearch.jsx");

describe("TodoSearch", () => {
	it("should exist", () => {
		expect(TodoSearch).toExist();
	});

	it("should call onSearch if something typed in the searchbox", () => {
		var searchText = "Dog";
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.searchText.value = searchText;

		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, searchText);

	});	

	it("should call onSearch with proper checked value", () => {
		var searchText = "Dog";
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.showCompleted.checked = true;

		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(true, "");

	});	
})
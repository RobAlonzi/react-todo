var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

import {configure} from "../../store/configureStore.jsx";
import ConnectedTodoList, { TodoList } from "../../components/TodoList.jsx";
import ConnectedTodo, { Todo } from "../../components/Todo.jsx";

describe("TodoList", () => {
	it("should exist", () => {
		expect(TodoList).toExist();
	});

	it("should render one Todo component for each todo item", () => {
		var todos = [{
			id: 1, 
			text: "Do something",
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}, {
			id: 2, 
			text: "Check mail",
			completed: false,
			completedAt: undefined,
			createdAt: 500
		}];

		var store = configure({
			todos
		});

		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList />
			</Provider>
		);
		var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it("should render empty message if no todos", () => {
		var todos = [];

		var toDoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var el = ReactDOM.findDOMNode(toDoList);

		expect(el.className).toBe("container__message");
	});
})
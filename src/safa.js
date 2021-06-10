import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, combineReducers } from "redux";
import { EraserFill, PencilSquare } from "react-bootstrap-icons";

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const store = createStore(todoApp);

const FilterLink = ({ filter, currentFilter, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter,
        });
      }}
    >
      {children}
    </a>
  );
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
  }
};

// editTask(text, key) {
//     const items = this.state.task;

//     this.setState({
//       task: items.filter(item => item.key !== key),
//     });
//   }

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div className="todo-app">
        <h1>
          What's the <span className="title"> TODO </span>List for Today!
        </h1>
        <div className="todo-form">
          <input
            placeholder="Add your task..."
            type="text"
            className="todo-input"
            name="text"
            ref={(node) => {
              this.input = node;
            }}
          />
          <button
            className="todo-button"
            onClick={() => {
              store.dispatch({
                type: "ADD_TODO",
                text: this.input.value,
                id: nextTodoId++,
              });
              this.input.value = "";
            }}
          >
            Add New Task
          </button>
          <p className="">
            <span className="show">Show: </span>
            <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
              <button className="show-status">All</button>
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
              <button className="show-status">Not Done</button>
            </FilterLink>
            <FilterLink
              filter="SHOW_COMPLETED"
              currentFilter={visibilityFilter}
            >
              <button className="show-status">Done</button>
            </FilterLink>
          </p>
          <ul>
            {visibleTodos.map((todo) => (
              <div key={todo.id}>
                <input
                  className="list-to-do"
                  onChange={() => {
                    store.dispatch({
                      type: "TOGGLE_TODO",
                      id: todo.id,
                    });
                  }}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  value={todo.text}
                />
                <PencilSquare
                  onClick={(e) => {
                    store.dispatch({
                      type: "edit",
                      text: this.input.value,
                      id: todo.id,
                    });
                    this.state.description = e.target.value;
                  }}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();

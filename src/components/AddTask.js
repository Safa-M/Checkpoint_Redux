import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions";

const AddTask = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
    alert("Input is Empty");
  } else {
    dispatch({
      type: ADD,
      payload: {
        id: Math.floor(Math.random() * 10000),
        value: task,
        completed: false,
      },
    });
    setTask("");
  };}


  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
          aria-describedby="button-addon2"
          placeholder="Add your task..."
          className="todo-input"
        />
        <button className="todo-button">Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;

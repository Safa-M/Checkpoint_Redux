import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE, EDIT, DONE } from "../redux/actions";

const Task = ({ id, value, isDone }) => {
  const [Edit, setEdit] = useState(value);

  const dispatch = useDispatch();

  // delete tasks:
  const handleDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: id,
    });
  };

  const submitEdit = (id) => {
    dispatch({
      type: EDIT,
      payload: {
        id: id,
      },
    });
  };

  const toggle = (id) => {
    dispatch({
      type: DONE,
      payload: id,
    });
  };
  return (
    <>
      <div>
        <input
          className={`input-to-do ${isDone && "completed"}`}
          type="text"
          value={Edit}
          onChange={(e) => setEdit(e.target.value)}
        />
      </div>
      <div className="icons">
        <button className="icon" onClick={() => handleDelete(id)}>
          Delete
        </button>
        <button className="icon" onClick={() => submitEdit(id)}>
          Edit
        </button>

        <button className="icon" onClick={() => toggle(id)}>
          Done
        </button>
      </div>
    </>
  );
};

export default Task;

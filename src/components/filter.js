import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FILTER } from "../redux/actions";
import "../App.css";

const Filter = () => {
  const [text, setText] = useState("all");
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch({ type: FILTER, payload: text });
  };
  return (
    <div>
      <select
        className="form-select"
        style={{ width: "320px" }}
        aria-label="Example select with button addon"
        aria-describedby="button-addon2"
        onChange={(e) => setText(e.target.value)}
      >
        <option defaultValue>choose...</option>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not_done">Not Done</option>
      </select>
      <button className="show" onClick={() => handleFilter()}>
        Show
      </button>
    </div>
  );
};

export default Filter;

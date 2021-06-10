import React from "react";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import Filter from "./components/filter";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-app">
        <h1>
          What's the <span className="title"> TODO </span>List for Today!
        </h1>
        <Filter />
        <AddTask />
        <ListTasks />
      </div>
    </div>
  );
}

export default App;
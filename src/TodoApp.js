// import React, { Component } from "react";
// import { connect } from "react-redux";
// import GetVisibleTodos from "./getVisibleTodos";
// import FilterLink from "./FilterLink";

// let nextTodoId = 0;
// class TodoApp extends Component {
//   render() {
//     const { todos, visibilityFilter } = this.props;
//     const visibleTodos = GetVisibleTodos(todos, visibilityFilter);
//     return (
//       <div className="todo-app">
//         <h1>
//           What's the <span className="title"> TODO </span>List for Today!
//         </h1>
//         <div className="todo-form">
//           <input
//             placeholder="Add your task..."
//             type="text"
//             className="todo-input"
//             name="text"
//             ref={(node) => {
//               this.input = node;
//             }}
//           />
//           <button
//             className="todo-button"
//             onClick={() => {
//               store.dispatch({
//                 type: "ADD_TODO",
//                 text: this.input.value,
//                 id: nextTodoId++,
//               });
//               this.input.value = "";
//             }}
//           >
//             Add New Task
//           </button>
//           <p className="">
//             <span className="show">Show: </span>
//             <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
//               <button className="show-status">All</button>
//             </FilterLink>
//             <FilterLink
//               filter="SHOW_COMPLETED"
//               currentFilter={visibilityFilter}
//             >
//               <button className="show-status">Done</button>
//             </FilterLink>
//             <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
//               <button className="show-status">Not Done</button>
//             </FilterLink>
//           </p>
//           <ul>
//             {visibleTodos.map((todo) => (
//               <li
//                 className="list-to-do"
//                 key={todo.id}
//                 onClick={() => {
//                   store.dispatch({
//                     type: "TOGGLE_TODO",
//                     id: todo.id,
//                   });
//                 }}
//                 style={{
//                   textDecoration: todo.completed ? "line-through" : "none",
//                 }}
//               >
//                 {todo.text}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//       todos
//   };
// };

// export default connect(mapStateToProps)(TodoApp);

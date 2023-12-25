import React from "react";

export default function Todo({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <div className="todo">
          <li className="todo-item">{todo.title}</li>
          <button className="complete-btn">
            <i className="fas fa-check-circle"></i>
          </button>
          <button className="trash-btn">
            <i className="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </>
  );
}

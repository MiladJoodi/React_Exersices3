import React from "react";

export default function Todo({ todos, onRemove, onDo }) {
  return (
    <>
      {
        todos.map(todo=> (
          <div key={todo.id} className={`todo ${todo.isDone ? "completed": ""}`}>
          <li className="todo-item">{todo.title}</li>
          <button className="complete-btn" onClick={()=> onDo(todo)}>
            <i className="fas fa-check-circle"></i>
          </button>
          <button className="trash-btn" onClick={()=>onRemove(todo.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
        ))
      }
    </>
  );
}

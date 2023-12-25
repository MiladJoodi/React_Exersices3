import React, { useEffect, useState } from "react";

import "./App.css";
import Todo from "./Components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    getAllTodos();
  }, []);

  function getAllTodos() {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((datas) => setTodos(datas));
  }

  return (
    <>
      <header>
        <h1>To Do List</h1>
      </header>
      <form action="">
        <input
          type="text"
          className="todo-input"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-circle fa-lg"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          <Todo todos={todos} />
        </ul>
      </div>
    </>
  );
}

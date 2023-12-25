import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import "./App.css";
import Todo from "./Components/Todo";

export default function App() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')

  useEffect(()=>{
    getAllTodos()
  },[])

  function getAllTodos(){
    fetch('http://localhost:3000/todos')
    .then((res)=> res.json())
    .then(data=> setTodos(data))
  }

  const todoRemoveHandlder = (id)=>{
    fetch(`http://localhost:3000/todos/${id}`,{
      method: "DELETE"
    }).then(res=> {
      if(res.status === 200){
        swal({
          title: 'Todo Removed Success',
          icon: 'success',
          buttons: "Hmmm, Ok"
        })
        getAllTodos()
      }
    })
  }

  const todoDoneHandler = (todo)=>{
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        ...todo,
        isDone: !todo.isDone,

      })
    }).then(res=>{
      if(res.status === 200){
        swal({
          title: 'Todo Done Success',
          icon: 'success',
          buttons: "Hmmm, ok"
        })
      }
      getAllTodos()
    })
  }

  const createTodoHandler = (event)=>{
    event.preventDefault();
    fetch('http://localhost:3000/todos',{
      method: "POST",
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        title: newTodoTitle,
        isDone: false
      })
    }).then(res=>{
      if(res.status === 201){
        swal({
          title: "Todo Creatd Success",
          icon: 'success',
          buttons: "Hmmm, ok"
        })
        getAllTodos()
      }
    })
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
        <button className="todo-button" type="submit" onClick={createTodoHandler}>
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
          <Todo todos={todos} onRemove={todoRemoveHandlder} onDo={todoDoneHandler} />
        </ul>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import swal from "sweetalert";

import "./App.css";
import Todo from "./Components/Todo";

export default function App() {
  const [todos, setTodos] = useState([])
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [option, setOption] = useState('')

  useEffect(()=>{
    getAllTodos()
  },[])

  function getAllTodos(){
    fetch('http://localhost:3000/todos')
    .then((res)=> res.json())
    .then(data=> setTodos(data))
  }
// Remove Button
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

// Done Button
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

  // Add To do
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
    setNewTodoTitle("")
  }

  // Select Option
  const optionHandler = (opt)=> {

    console.log(opt)
    
    switch (opt) {
      case 'completed':
          fetch('http://localhost:3000/todos?isDone=true')
          .then((res)=> res.json())
          .then(data=> setTodos(data))
        break;
      case 'incomplete':
          fetch('http://localhost:3000/todos?isDone=false')
          .then((res)=> res.json())
          .then(data=> setTodos(data))
        break;
    
      default:
        getAllTodos()
        break;
    }

    

    // setOption(event.target.value)

    // {option}
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
          <select name="todos" className="filter-todo" onChange={(event)=>optionHandler(event.target.value)}>
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

// https://fakestoreapi.com/products

import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Product from "./Components/Product"

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const registerHandler = (event)=>{
    event.preventDefault();
    console.log(event);
    axios.post('https://project1-68be.restdb.io/rest/products', {
      name,
      email,
    })
    .then((res)=>{
      if(res.status === 200){
        alert("ثبت نام با موفقیت انجام شد")
      }
    })
  }

  return (
    <div className='login-page'>
      <div className='form'>
        <form className='login-form'>
          <input type="text" placeholder='Name...' value={name} onChange={(event)=>setName(event.target.value)} />
          <input type="text" placeholder='Email...' value={email} onChange={(event)=>setEmail(event.target.value)} />
          <button onClick={registerHandler}>Register</button>
          <p className='message'>
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default App

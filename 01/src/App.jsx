import React, { useState } from "react";
import swal from "sweetalert";

import "./App.css";

export default function App() {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const registerHandler = async ()=>{
    event.preventDefault();

    const newUserObj = {
      "name" : userName,
      "age": userAge
    } 

    const res = await fetch('http://localhost:3000/users', {
      method: "POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newUserObj)
    })
    console.log(res);

    if(res.status === 201){
      swal({
        title: 'ثبت نام شما با موفقیت انجام شد',
        icon: 'success',
        buttons: 'خیلی هم عالی'
      })
    }else{
      swal({
        //Error
      })
    }


    const newUserResult = await res.json()
    console.log(newUserResult);

  }


  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            value={userName}
            placeholder="UserName"
            onChange={e=> setUserName(e.target.value)}
          />
          <input
            type="text"
            value={userAge}
            placeholder="Age"
            onChange={e=> setUserAge(e.target.value)}
          />
          <button onClick={registerHandler}>Register</button>
          <p className="message">
            Are You Registered? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import swal from "sweetalert";

import "./App.css";

export default function App() {
  const [userId, setUserId] = useState('')

  const deleteUserHandler = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:3000/users/${userId}`, {
      method: "DELETE",
 });
    console.log(res.status);

    if(res.status === 200){
      swal({
        title: 'حذف شد',
        icon: 'success',
        buttons: 'خیلی هم عالی'
      })
    }else{
      swal({
        title: "نشد"
      })
    }

  }


  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            value={userId}
            placeholder="User ID"
            onChange={e=> setUserId(e.target.value)}
          />
          <button onClick={deleteUserHandler}>Delete</button>
          <p className="message">
            Are You Registered? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import swal from "sweetalert";

import "./App.css";

export default function App() {
  const [userID, setUserID] = useState("");

  const removeUserHandler = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:3000/courses/${userID}`, {
      method: "DELETE",
    });
    setUserID('')
    console.log(res);

    if (res.status === 200) {
      swal({
        title: "کاربر مورد نظر با موفقیت حذف شد",
        icon: "success",
        buttons: "خیلی هم عالی",
      });
    } else {
      swal({
        // Error
      });
    }

    const newUserResult = await res.json();
    console.log(newUserResult);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input
            type="text"
            placeholder="User ID"
            value={userID}
            onChange={(event) => setUserID(event.target.value)}
          />
          <button onClick={removeUserHandler}>Remove User</button>
          <p className="message">
            Are You Registered? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

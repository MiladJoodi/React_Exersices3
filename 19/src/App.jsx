import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [phone, setPhone] = useState('')
  const [isSent, setInSent] = useState(false)

  const sendCode = async (event) => {
    event.preventDefault();

    const res = await fetch('http://localhost:3001/api/sms/send-code', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone })
    })

    if (res.status === 200) {
      swal({
        title: 'Code sent successfully ♥',
        buttons: 'Ok'
      })
      setInSent(true)
    } else {
      swal({
        title: "some thing wrong!",
        buttons: 'Ok'
      })
    }

    console.log('Response => ', res)
    console.log('Response data => ', data)
  }

  const veifyCode = async (event)=>{
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          {isSent ?
            <>
              <input type="number" placeholder="Code" onChange={e => setPhone(e.target.value)} />
              <button onClick={verifyCode}>Enter Code</button>
            </> :
            <>
              <input type="number" placeholder="Phone Number" onChange={e => setPhone(e.target.value)} />
              <button onClick={sendCode}>Send Code</button>
            </>
          }


          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;

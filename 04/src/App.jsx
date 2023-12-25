import { useState } from 'react'
import './App.css'
// import Lodash from 'lodash'
import _ from 'lodash'

function App() {

  const [products, setProducts] = useState([
    { id: 1, title: "laptop", price: 90_000_000, count: 12 },
    { id: 2, title: "Phone", price: 5_000_000, count: 0 },
    { id: 3, title: "Book", price: 50_000_000, count: 200 },
  ])

  const [user,setUser] = useState({
    id: 1,
    name: 'Amin',
    email: 'test@gmail.com',
    age: 22
  })

  console.log(_.pick(user, ['name', 'email']));
  console.log(_.pickBy(user, _.isNumber));

  return (
    <>
      <h1>Lodash</h1>
      <hr />

    </>
  )
}

export default App

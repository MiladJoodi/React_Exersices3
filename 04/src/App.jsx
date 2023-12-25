import { useState } from 'react'
import './App.css'
import Lodash from 'lodash'

function App() {

  const [products, setProducts] = useState([
    {id: 1, title: "laptop", price: 90_000_000},
    {id: 2, title: "Phone", price: 5_000_000},
    {id: 3, title: "Book", price: 50_000_000},
  ])

  return (
    <>
    <h1>Lodash</h1>
    <hr />
     <h2>Sum: {Lodash.sum([1,2,3,4])}</h2>
     <hr />
     <h2>Total Price: {Lodash.sumBy(products, (product)=> product.price).toLocaleString()}</h2>
    </>
  )
}

export default App

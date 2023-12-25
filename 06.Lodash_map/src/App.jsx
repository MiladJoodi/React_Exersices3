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

  return (
    <>
      <h1>Lodash</h1>
      <hr />
      {
        _.map(products, (product)=> {
          product.price += 1_000_000
          return product;
        }).map((product)=> (
          <h4 key={product.id}>
            {product.title} : {product.price}
          </h4>
        )
        )
      }

    </>
  )
}

export default App

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
      {/* <h1>
      {_.filter(products, (product)=> product.price > 10_000_000).map(product =>(
        <h2>{product.title}</h2>
      ))}
    </h1> */}


{/* title: "Phone" */}
      {/* <h1>
        {_.filter(products, { title: "Phone" }).map((product) => (
          <h4>{product.title}</h4>
        ))}
      </h1> */}

      {/* 5_000_000 */}
      {/* <h1>
        {_.filter(products, {price: 5_000_000}).map((product) => (
          <h4>{product.title}</h4>
        ))}
      </h1> */}


{/* count وجود داشته باشه */}
      <h1>
        {_.filter(products, "count").map((product) => (
          <h4>{product.title}</h4>
        ))}
      </h1>

    </>
  )
}

export default App

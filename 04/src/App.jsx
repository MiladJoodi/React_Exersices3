// https://fakestoreapi.com/products

import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";
import Product from "./Components/Product"

function App() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    // axios.get('https://fakestoreapi.com/products?limit=5')
    .then((response)=>{
      console.log(response);
      setProducts(response.data)
    })
  }, [])

  return (
    <ul>
      {
        products?.map((product)=>(
          <Product key={product.key} {...product}/>
        ))
      }
    </ul>
  )
}

export default App

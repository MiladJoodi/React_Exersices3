import './App.css'
import Header from './Header/Header'
import CategoryList from './CategoryList/categoryList'
import { useEffect, useState } from 'react'
import axios from './axios'
import Loading from './Loading/loading'

function App() {

  const [loading, setLoading] = useState(false)
  const [fastFoodItems, setfastFoods] = useState([])

  const fetchData = async (categoryId = null)=>{
    setLoading(true)
    const response = await axios.get(`/FastFood/list/${categoryId ? '?categoryId='+ categoryId : ""}`)
    setLoading(false)
    setfastFoods(response.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  const renderContent = ()=>{
    if(loading){
      return <Loading />
    }
    return <FastFood />
  }

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList />
    </div>
  )
}

export default App

import './App.css'
import Header from './Header/Header'
import CategoryList from './CategoryList/categoryList'
import { useEffect, useState } from 'react'
import axios from './axios'
import Loading from './Loading/loading'
import FastFoodList from './FastFoodList/fastFoodList'

function App() {

  const [loading, setLoading] = useState(false)
  const [fastFoodItems, setFastFoods] = useState([])

  const fetchData = async (categoryId = null)=>{
    setLoading(true)
    const response = await axios.get(`/FastFood/list/${categoryId ? "?categoryId="+ categoryId : ""}`)
    setLoading(false)
    setFastFoods(response.data)
    // alert(response.data)
  }

  useEffect(()=>{
    fetchData()
  },[])


  const filterItems = (categoryId)=>{
    fetchData(categoryId)
  }


  const renderContent = ()=>{
    if(loading){
      return <Loading />
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />
  }

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList filterItems={filterItems}></CategoryList>
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  )
}

export default App

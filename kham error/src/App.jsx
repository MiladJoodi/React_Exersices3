import './App.css'
import Header from './Header/Header'
import CategoryList from './CategoryList/categoryList'
import { useEffect, useState } from 'react'
import axios from './axios'
import Loading from './Loading/loading'
import FastFoodList from './FastFoodList/fastFoodList'
import SearchBar from './SearchBar/searchBar'
import notFound from './assets/images/404.png'

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

  //search
  const searchItems = async (term)=>{
    setLoading(true)
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" + term: ""}`
    )
  }


  const renderContent = ()=>{
    if(loading){
      return <Loading />
    }
    if(fastFoodItems.length === 0){
      return(
        <>
        <div className='alert alert-warning text-center'>
          برای کلید واژه فوق موردی یافت نشد
        </div>
        <img className='mx-auto mt-5' src=""/>
        </>
      )
    }
    return <FastFoodList fastFoodItems={fastFoodItems} />
  }

  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className='container mt-4'>
        {renderContent()}
      </div>
    </div>
  )
}

export default App

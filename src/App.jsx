import React, { useState } from 'react'
import Navbar from './components/Navbar'
import CategoryTabs from './components/Category'
import { Route, Routes } from 'react-router-dom'
import DiningOut from './pages/DiningOut'
import Delivery from './pages/Delivery'
import NightLife from './pages/NightLife'
import Collections from './components/Collections'
import FilterBar from './components/FiltersBar'
import OfferBar from './components/OfferBar'
import OfferPanel from './components/ItemCard'
import ItemsList from './components/ItemsList'
import LocalityList from './components/LocalityList'
import Footer from './components/Footer'
import LoginPage from './pages/Login'

const App = () => {
  const [searchTerm, setsearchTerm] = useState('')
  return (
    <div className='poppins-regular '>
      <Navbar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
      <CategoryTabs  />
      
      <Routes>
        <Route path="/" element={<DiningOut searchTerm={searchTerm}/>} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/nightlife" element={<NightLife />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
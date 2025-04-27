import React from 'react'
import Collections from '../components/Collections'
import FilterBar from '../components/FiltersBar'
import OfferBar from '../components/OfferBar'
import OfferPanel from '../components/ItemCard'
import ItemsList from '../components/ItemsList'
import LocalityList from '../components/LocalityList'
import Footer from '../components/Footer'
const DiningOut = ({searchTerm}) => {
  return (
    <div>
      
      <Collections searchTerm={searchTerm}/> {/* inside this component i want searchTerm  */}
      <FilterBar />
      <OfferBar />
      <ItemsList />
      <LocalityList />
      <Footer/>
    </div>
  )
}

export default DiningOut
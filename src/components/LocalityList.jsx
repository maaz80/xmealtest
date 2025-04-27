import React from 'react'
import LocalityCard from './LocalityCard'

const LocalityList = () => {
    const List = [
        {
          "location": "Jaunpur, UP",
          "numberOfPlaces": 15
        },
        {
          "location": "Varanasi, UP",
          "numberOfPlaces": 25
        },
        {
          "location": "Lucknow, UP",
          "numberOfPlaces": 30
        },
        {
          "location": "Delhi, NCR",
          "numberOfPlaces": 50
        },
        {
          "location": "Mumbai, Maharashtra",
          "numberOfPlaces": 45
        },
        {
          "location": "Pune, Maharashtra",
          "numberOfPlaces": 35
        },
        {
          "location": "Bangalore, Karnataka",
          "numberOfPlaces": 40
        },
        {
          "location": "Hyderabad, Telangana",
          "numberOfPlaces": 38
        },
        {
          "location": "Chennai, Tamil Nadu",
          "numberOfPlaces": 42
        }
      ]
      
  return (
    <div className=' mt-20 px-2 lg:px-52'>
        <h1 className='text-5xl text-gray-700 ml-3'>Popular localities in and around Lucknow</h1>
       <div className='flex flex-wrap gap-4 justify-center mt-10'>
       {List.map((item, index)=>(
            <LocalityCard key={index} location={item.location} NoOfPlaces={item.numberOfPlaces} />
        ))}
       </div>
    </div>
  )
}

export default LocalityList
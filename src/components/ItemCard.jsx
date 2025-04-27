import React from 'react'
import { BiSolidStar } from 'react-icons/bi'

const ItemCard = ({Restname, imageUrl ,priceForTwo, cuisine, address, rating ,opensAt,distanceInKm}) => {
  return (
    <div className='w-[170px] lg:w-[360px] h-[180px] lg:min-h-[430px] p-1 lg:p-3 hover:shadow-md rounded-lg'>
        <div className='w-full h-[100px] lg:h-[250px] rounded-lg overflow-hidden'>
            <img src={imageUrl} alt="FOod" className='w-full object-cover h-[100px] lg:h-[250px]'/>
        </div>
        <div className='flex justify-between items-center my-2'>
            <h1 className='font-medium text-sm lg:text-lg'>{Restname}</h1>
            <div className='bg-green-700 h-4 rounded-md text-[10px] lg:text-xs flex items-center justify-center text-white font-semibold px-1'>{rating}<BiSolidStar /></div>
        </div>
        <div className='flex justify-between items-center my-1'>
            <h1 className='text-[10px] lg:text-base text-gray-500'>{cuisine}</h1>
            <div className='text-[10px] lg:text-base  text-gray-500'>₹{priceForTwo} for two</div>
        </div>
        <div className='text-[10px] lg:text-base text-gray-500'>{address}</div>
        <div className='flex justify-between items-center my-1'>
            <div className='text-red-800 text-[10px] lg:text-sm'>Opens at {opensAt}</div>
            <div className='text-[10px] lg:text-base'>{distanceInKm}km</div>
        </div>
    </div>
  )
}

export default ItemCard
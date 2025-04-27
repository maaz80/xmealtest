import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const LocalityCard = ({ location, NoOfPlaces }) => {
    return (
        <div className='w-[350px] h-[70px] hover:shadow-md rounded-lg flex items-center justify-between p-3 border border-gray-300'>
            <div className='flex items-start justify-around flex-col'>
                <div>{location}</div>
                <div className='text-gray-400'>{NoOfPlaces} Places</div>
            </div>
            <div className='text-gray-500'>
                <FaAngleRight />
            </div>
        </div>
    )
}

export default LocalityCard
import React from 'react'
import { PiCubeBold } from "react-icons/pi"

const Card = () => {
  return (
    <div className='w-full h-20 lg:w-1/5 md:h-48 flex justify-between items-center md:grid bg-blue-700 rounded-3xl p-8 space-y-5'>
      <div className='flex w-10 h-10 bg-blue-500 rounded-[50%] justify-center items-center'>
        <PiCubeBold  className='text-white w-6 h-6'/>
      </div>
      <div className='text-base text-white'>
        <p>Difficulty</p>
        <p>Low</p>
      </div>
    </div>
  )
}

export default Card
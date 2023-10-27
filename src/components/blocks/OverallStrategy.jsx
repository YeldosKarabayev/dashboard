import React from 'react'
import { BsLightningChargeFill, BsArrowUpRight } from "react-icons/bs"
import { FcTrademark } from "react-icons/fc"
import { FaCcVisa, FaCcPaypal } from "react-icons/fa"


const OverallStrategy = () => {
  return (
    <div className='md:pl-5 w-full'>
    <div className='p-10 w-full h-max bg-white rounded-3xl mt-5'>
      <div className='w-full flex justify-between items-center'>
        <div className='grid items-center gap-2 font-semibold text-blue-700'>
          <div className='hidden md:flex items-center text-xs gap-2'>
            <p>COMPLETE AND WIN: INCREASE YOUR SPEND ON THE SCRYPT NETWORK</p>
            <BsLightningChargeFill />
          </div>
          <h1 className='text-xl font-bold text-black'>
              Overall Strategy
            </h1>
        </div>
        <FcTrademark className='w-12 h-12' />
      </div>
      <p className='text-gray-400'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>

      {/* Cards */}
      <div className='md:flex gap-3'>
      <div className='relative md:w-1/2 h-max bg-white shadow-xl rounded-3xl mt-5 space-y-5 p-5'>
        <FaCcVisa className='w-14 h-12'/>
        <div className='grid'>
          <p className='text-xs text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className='text-lg font-semibold'>DAILY CHALLENGES</p>
        </div>
        <div className='absolute flex w-12 h-12 bottom-0 right-0 justify-center items-center rounded-[50%] bg-blue-700'>
          <BsArrowUpRight className='w-6 h-6 relative text-white'/>
        </div>
      </div>
      <div className='relative md:w-1/2 h-max bg-white shadow-xl rounded-3xl mt-5 space-y-5 p-5'>
        <FaCcPaypal className='w-14 h-12'/>
        <div className='grid'>
          <p className='text-xs text-gray-400'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className='text-lg font-semibold'>STRUGGLE FOR RATING</p>
        </div>
        <div className='absolute flex w-12 h-12 bottom-0 right-0 justify-center items-center rounded-[50%] bg-blue-700'>
          <BsArrowUpRight className='w-6 h-6 relative text-white'/>
        </div>
      </div>
      </div>

    </div>
    </div>
  )
}

export default OverallStrategy
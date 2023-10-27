import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { PiCubeBold } from "react-icons/pi"
import { FcAbout } from "react-icons/fc"
import Card from './Card'

const OverviewNetwork = () => {
  return (
    <div className='md:pl-5 w-full'>
      <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Overview Network</h1>
        <button className='flex items-center gap-2'>
          <span className='text-base font-semibold text-blue-700'>Next Airdrop</span>
          <HiMiniArrowLongRight  className='text-blue-700'/>
        </button>
      </div>
      <div className='grid lg:flex w-full gap-3 mt-5'>
        <Card />
        <Card />
        <Card />
        <div className='w-full lg:w-1/2 h-48 bg-white rounded-3xl space-y-5 p-5'>
           <div className='w-full flex justify-between items-center'>
            <div className='grid'>
              <p className='text-xs text-gray-400'>Resources</p>
              <p className='text-xl font-semibold'>Resources</p>
            </div>
            <div className='flex w-14 h-14 bg-blue-700 rounded-[50%] justify-center items-center'>
              <PiCubeBold  className='text-white w-6 h-6'/>
            </div>
           </div>
           <div className='w-full flex items-center text-xs font-semibold'>
            <div className='w-1/5 grid space-y-1'>
              <FcAbout className='w-10 h-10'/>
              <p>SUI</p>
            </div>
            <div className='w-1/5 grid space-y-1'>
              <FcAbout className='w-10 h-10'/>
              <p>ARCENTIX</p>
            </div>
            <div className='w-1/5 grid space-y-1'>
              <FcAbout className='w-10 h-10'/>
              <p>ARCENTIX</p>
            </div>
            <div className='w-1/5 grid space-y-1'>
              <FcAbout className='w-10 h-10'/>
              <p>MARTIAN</p>
            </div>
            <div className='w-1/5 grid space-y-1'>
              <FcAbout className='w-10 h-10'/>
              <p>PETRA</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewNetwork
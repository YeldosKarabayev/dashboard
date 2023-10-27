import React from 'react'
import { BsDroplet, BsTwitter, BsDiscord, BsFacebook } from "react-icons/bs"
import { CgOptions } from "react-icons/cg"
import { AiOutlineExport } from "react-icons/ai"

const SuiNetwork = () => {
  return (
    <div className='w-full h-max bg-white rounded-2xl'>
      <div className='w-full '>
        <div className='flex p-5 h-1/5 rounded-tl-2xl rounded-tr-2xl bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 items-center text-white justify-center'>
          <BsDroplet className='w-20 h-20'/>
          <p className='text-5xl'>SUI</p>
        </div>
        <div className='absolut -mt-5 ml-5 flex p-5 justify-center items-center text-white w-16 h-16 rounded-[50%] bg-blue-950'>
          <BsDroplet className='w-6 h-6' />
          <p className='text-base'>SUI</p>
        </div>
        <div className='flex p-5 items-center justify-between mt-4'>
          <div className='grid space-y-3'>
            <p className='text-4xl font-semibold'>
              SUI Network
              <span className='text-sm text-gray-400 ml-2'>sui</span>
            </p>
            <div className='flex items-center gap-2'>
              <span className='w-max px-2 h-6 bg-blue-100  rounded-xl text-blue-700 font-semibold text-center'>
                TESTNET
              </span>
              <span className='w-max px-2 h-6 bg-blue-100  rounded-xl text-blue-700 font-semibold text-center'>
                BLOCKCHAIN
              </span>
            </div>
          </div>
          <CgOptions className='w-8 h-8'/>
        </div>
        <div className='flex p-5 text-xl font-semibold items-center justify-between w-3/4 md:w-3/5 mt-5'>
          <p>Community</p>
          <BsTwitter className='w-6 h-6'/>
          <BsDiscord className='w-6 h-6'/>
          <BsFacebook className='w-6 h-6'/>
        </div>
        <div className='grid p-5 space-y-6 mt-10'>
        <div className='w-full h-[2px] bg-gray-300' />
            <p className='text-xl font-semibold'>Official links</p>
            <div className=' flex-wrap space-y-2 md:space-y-0 md:flex  items-center gap-2'>
              <span className='w-max px-4 py-1 h-max bg-green-300 flex items-center gap-2  rounded-xl font-semibold text-center'>
                WHETEPAPER
                <AiOutlineExport />
              </span>
              <span className='w-max px-4 py-1 h-max bg-green-300 flex items-center gap-2  rounded-xl font-semibold text-center'>
                SUI WALLET
                <AiOutlineExport />
              </span>
              <span className='w-max px-4 py-1 h-max bg-green-300 flex items-center gap-2  rounded-xl font-semibold text-center'>
                SUI JO
                <AiOutlineExport />
              </span>
            </div>
            <div className='w-full h-[2px] bg-gray-300' />
            <div className='flex text-xl font-semibold items-center justify-between w-full md:w-3/4 mt-5'>
              <p>Social Campaigns</p>
              <BsTwitter className='w-6 h-6'/>
              <BsDiscord className='w-6 h-6'/>
              <BsFacebook className='w-6 h-6'/>
              <BsFacebook className='w-6 h-6'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SuiNetwork
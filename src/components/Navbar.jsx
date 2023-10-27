import React, { useState } from 'react'
import userImage from '../data/avatar4.jpg'
import { PiWarningCircleBold } from 'react-icons/pi'
import { SiCrystal } from 'react-icons/si'
import { FcManager } from 'react-icons/fc'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
    <div className='flex xl:flex w-full h-20 bg-none  justify-evenly gap-20 items-center p-5'>
      <ul className='hidden lg:w-2/3  lg:flex gap-9 text-gray-400 items-center cursor-pointer'>
        <li className='flex items-center gap-2'>
          <SiCrystal />
          <span>Airdrops</span>
        </li>
        <li className='flex items-center gap-2'>
          <PiWarningCircleBold />
          <span>Getting Started</span>
        </li>
        <li className='flex items-center gap-2'>
          <PiWarningCircleBold />
          <span>Resources</span>
        </li>
        <li className='flex items-center gap-2'>
          <PiWarningCircleBold />
          <span>Fauced Links</span>
        </li>
        <li className='flex items-center gap-2'>
          <PiWarningCircleBold />
          <span>Strategies</span>
        </li>
        <li className='flex items-center gap-2'>
          <PiWarningCircleBold />
          <span>Render and Earn</span>
        </li>
      </ul>
      <div className='hidden lg:flex lg:w-1/3 justify-between  items-center gap-3'>
        <div className='hidden md:flex w-48 h-12 rounded-3xl text-blue-800 font-bold gap-1 items-center bg-gray-300 p-2 text-center'>
          <FcManager  className='w-10 h-10'/>
          <span>№56489531849</span>
          <IoIosArrowDown  className='w-8 h-8'/>
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <div>
            <p className='text-lg font-bold'>Matthew Trust</p>
            <p className='text-sm text-gray-400'>Airdrop Hunters</p>
          </div>
          <img 
            src={userImage} 
            alt='user-image' 
            className='w-12 h-12 rounded-[50%]'
          />
        </div>
      </div>
    </div>
    <div className='px-5 flex justify-between items-center'>
    <div className='flex items-center gap-2'>
          <div>
            <p className='text-lg font-bold'>Matthew Trust</p>
            <p className='text-sm text-gray-400'>Airdrop Hunters</p>
          </div>
          <img 
            src={userImage} 
            alt='user-image' 
            className='w-12 h-12 rounded-[50%]'
          />
        </div>
      <div 
        className='flex lg:hidden justify-center items-center mr-4 w-10 h-10 bg-gray-400 text-blue-600 rounded-[50%]'
        onClick={() => setIsClicked(!isClicked)} 
      >
        <HiOutlineMenuAlt3 className='w-5 h-5'/>
      </div>
    </div>
      {isClicked && <MobileMenu />}
    </>
  )
}

export default Navbar;

function MobileMenu() {
  return(
    <div className='bg-gray-800 absolute rounded top-0 right-0 justify-center text-center p-5  w-[200px] h-max z-[2] lg:hidden'>
      <ul className='grid gap-9 text-gray-400 items-center'>
        <li className='flex items-center gap-2 cursor-pointer'>
          <SiCrystal />
          <span>Airdrops</span>
        </li>
        <li className='flex items-center gap-2 cursor-pointer'>
          <PiWarningCircleBold />
          <span>Getting Started</span>
        </li>
        <li className='flex items-center gap-2 cursor-pointer'>
          <PiWarningCircleBold />
          <span>Resources</span>
        </li>
        <li className='flex items-center gap-2 cursor-pointer'>
          <PiWarningCircleBold />
          <span>Fauced Links</span>
        </li>
        <li className='flex items-center gap-2 cursor-pointer'>
          <PiWarningCircleBold />
          <span>Strategies</span>
        </li>
        <li className='flex items-center gap-2 cursor-pointer'>
          <PiWarningCircleBold />
          <span>Render and Earn</span>
        </li>
      </ul>
    </div>
  )
}
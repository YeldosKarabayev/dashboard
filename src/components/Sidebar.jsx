import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { SiCrystal, Si1001Tracklists} from 'react-icons/si'
import { MdOutlineCancel, MdOutlineContactSupport, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineAppstore } from 'react-icons/ai'
import { BiUserCircle, BiLogoDiscord, BiLogoTwitter, BiLogoTelegram } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { links } from '../data/dummy';
 

const Sidebar = () => {

  const activeMenu = true;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`hidden sm:block bg-gradient-to-t from-green-500 via-blue-400 to-blue-700  h-screen pb-10 ${isOpen ? 'w-20' : 'w-60'}`}>
        <>
          <div className='flex justify-between items-center ml-3'>
            <Link to="/" onClick={() => {}}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extralight
              dark:text-white text-white'>
                <SiCrystal /> <span className={`${isOpen ? 'hidden' : ''}`}>Airdrops</span>
              </Link>
              <TooltipComponent content="Menu"
              position='BottomCenter'>
    {isOpen ? (<button type='button'
                  onClick={toggleSidebar}
                  className={`text-xl rounded-full p-3
                    text-gray-500
                    hover:bg-blue-200 mt-4 block ${isOpen ? 'absolute bg-gray-100 text-gray-600 -ml-5' : ''}`}
                >
                  <IoIosArrowForward />
                </button>
                ) : (
                  <button type='button'
                    onClick={toggleSidebar}
                    className={`text-xl rounded-full p-3
                    text-white
                    hover:bg-blue-200 mt-4 block ${isOpen ? 'absolute bg-gray-100 text-gray-600 -ml-5' : ''}`}
                >
                  <MdOutlineCancel />
                </button>
                )}
              </TooltipComponent>
          </div>
          <div className='mt-10 ml-6 mr-6'>
            <ul className='text-md text-white space-y-5 cursor-pointer'>
            <li className='flex items-center gap-2'>
                <AiOutlineAppstore />
                  <span className={`${isOpen ? 'hidden' : ''}`}>Menu</span>
              </li>
              <li className='flex items-center gap-2'>
                <Si1001Tracklists />
                  <span className={`${isOpen ? 'hidden' : ''}`}>Info</span>
              </li>
              <li className='flex items-center gap-2'>
                <MdOutlineContactSupport />
                  <span className={`${isOpen ? 'hidden' : ''}`}>Contacts</span>
              </li>
              <li className='flex items-center gap-2'>
                <MdOutlineProductionQuantityLimits />
                  <span className={`${isOpen ? 'hidden' : ''}`}>Products</span>
              </li>
              <li className='flex items-center gap-2'>
                <BiUserCircle  />
                  <span className={`${isOpen ? 'hidden' : ''}`}>About</span>
              </li>
            </ul>
            <div className=''>
            <div className='w-full h-[2px] bg-gray-300 mt-20' />
              <div className='grid space-y-5 my-10 justify-center'>
                <div className='w-10 h-10 flex items-center justify-center text-white border-white border-2 rounded-[50%]'>
                  <BiLogoDiscord className='w-6 h-6'/>
                </div>
                <div className='w-10 h-10 flex items-center justify-center text-white border-white border-2 rounded-[50%]'>
                  <BiLogoTwitter className='w-6 h-6'/>
                </div>
                <div className='w-10 h-10 flex items-center justify-center text-white border-white border-2 rounded-[50%]'>
                  <BiLogoTelegram className='w-6 h-6'/>
                </div>
              </div>
            </div>
          </div>
        </>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { FcInfo, FcStumbleupon } from "react-icons/fc"

const PreviousRequirements = () => {
  return (
    <div className='md:pl-5 w-full'>
        <div className='p-5 space-y-3 md:space-y-0 md:flex md:p-10 w-full h-max bg-white rounded-3xl mt-5'>
            <div className='flex w-1/3 items-center text-center'>
                <p className='text-xl font-semibold'>
                    Previous <br className='hidden'/> Requirements
                </p>
            </div>  
            <div className='flex md:w-2/3'>
                <div className='w-1/2 grid space-y-4'>
                    <div className='flex items-center gap-3'>
                        <FcInfo className='w-14 h-14'/>
                        <div className='grid'>
                          <p className='font-semibold'>HAVE NETAMAX <br/> INSTALLED</p>
                          <p className='text-xs text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FcInfo className='w-14 h-14'/>
                        <div className='grid'>
                          <p className='font-semibold'>HAVE NETAMAX <br/> INSTALLED</p>
                          <p className='text-xs text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 grid space-y-4'>
                    <div className='flex items-center gap-3'>
                        <FcStumbleupon className='w-14 h-14'/>
                        <div className='grid'>
                          <p className='font-semibold'>HAVE NETAMAX <br/> INSTALLED</p>
                          <p className='text-xs text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FcStumbleupon className='w-14 h-14'/>
                        <div className='grid'>
                          <p className='font-semibold'>HAVE NETAMAX <br/> INSTALLED</p>
                          <p className='text-xs text-gray-400'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreviousRequirements
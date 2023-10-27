import React from 'react'
import { AiOutlineGlobal } from "react-icons/ai"
import cube from "../../data/cube.jpg"

const AboutNetwork = () => {
  return (
    <>
    <div className='md:pl-5 w-full h-max'>
      <div className='flex  items-center justify-between'>
        <h1 className='text-2xl font-semibold'>About Network</h1>
      </div>
    <div className='p-5 w-full h-max bg-white rounded-3xl mt-5'>
      <div className='md:w-1/3 flex items-center mb-2 gap-3'>
        <AiOutlineGlobal className='w-6 h-6'/>
        <h1 className='font-bold text-xl mt-3'>WHAT IS SUI NETWORK?</h1>
      </div>
      <h2 className='w-3/4'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged.
      </h2>
    </div>
  </div>
  </>
  )
}

export default AboutNetwork
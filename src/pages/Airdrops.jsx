import React from 'react'
import { AboutNetwork, OverallStrategy, OverviewNetwork, PreviousRequirements, SuiNetwork } from '../components'
import { BreadCrumbs } from '../components/ui'

const Airdrops = () => {
  return (
    <> 
    <BreadCrumbs />
    <div className='container  md:flex w-full h-full gap-5  mb-5'>
    <div className='w-full mb-3 md:w-1/3 md:hidden'>
        <SuiNetwork />
      </div>
      <div className='w-full md:w-2/3 space-y-5'>
        <OverviewNetwork />
        <AboutNetwork />
        <OverallStrategy />
        <PreviousRequirements />
      </div>
      <div className='w-full  md:w-1/3 hidden md:flex mr-3'>
        <SuiNetwork />
      </div>
    </div>
    </>
  )
}

export default Airdrops
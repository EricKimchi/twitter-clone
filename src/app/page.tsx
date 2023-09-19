import Link from 'next/link'
import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import MainComponent from '../components/MainComponent'
import RightTrending from '../components/RightTrending'

export const revalidate = 0;

{/*Homepage has a fixed width with 3 columns: a sidebar, the home tweet column, and a recommendation section*/}
const Home = async () => {
  
  return (
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <LeftSidebar/>
        <MainComponent/>
        <RightTrending/>
      </div>
    </div>
  )
}

export default Home
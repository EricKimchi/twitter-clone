import Link from 'next/link'
import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots, BsChat, BsDot, BsSearch} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import LeftSidebar from './components/LeftSidebar'
import MainComponent from './components/MainComponent'
import RightTrending from './components/RightTrending'

const NAVIGATION_ICONS = [
  {
    title:'Twitter',
    icon:BsTwitter
  },
  {
    title:'Home',
    icon:BiHomeCircle
  },
  {
    title:'Explore',
    icon:HiOutlineHashtag
  },
  {
    title:'Notification',
    icon:BsBell
  },
  {
    title:'Messages',
    icon:BsEnvelope
  },
  {
    title:'Bookmarks',
    icon:BsBookmark
  },
  {
    title:'Profile',
    icon:BiUser
  }
]

{/*Homepage has a fixed width with 3 columns: a sidebar, the home tweet column, and a recommendation section*/}
const Home = () => {
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
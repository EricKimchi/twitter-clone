import Link from 'next/link'
import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark, BsTwitter, BsEnvelope, BsThreeDots} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'

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
      <div className='max-w-screen-xl w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
          <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>
          {NAVIGATION_ICONS.map((item)=>(
            <Link className=' hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-full py-2 px-6' href={`/${item.title.toLowerCase()}`} key={item.title}>
              <div>
                <item.icon/>
              </div>
              <div>
                {item.title !== 'Twitter' && <div>{item.title}</div>}
              </div>
            </Link>
            ))}
            <button className='rounded-full bg-primary m-4 p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
              Tweet
            </button>
          </div>
          <div>
            <button className='rounded-full flex items-center space-x-2 bg-transparent m-4 p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between'>
              <div className='flex items-center space-x-2'>
                <div className='rounded-full bg-slate-400 w-10 h-10'></div>
                <div className='text-left text-sm'>
                  <div className='font-semibold'>User Name</div>
                  <div className=''>@username</div>
                </div>
              </div>
              <div>
                <BsThreeDots/>
              </div>
            </button>
          </div>
        </section>
        {/*<main>Home timeline</main>
        <section>right section</section>*/}
      </div>
    </div>
  )
}

export default Home
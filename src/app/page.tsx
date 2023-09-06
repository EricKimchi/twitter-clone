import Link from 'next/link'
import React from 'react'
import {BiHomeCircle, BiUser} from 'react-icons/bi'
import {BsBell, BsBookmark} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'

const NAVIGATION_ICONS = [
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
    icon:HiEnvelope
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

// Homepage has a fixed width with 3 columns: a sidebar, the home tweet column, and a recommendation section
export const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        {/* left sidebar for navigation/header */}
        <section className='fixed w-72 flex flex-col'>
          {
            NAVIGATION_ICONS.map((item)=>(
              <Link className=' bg-white/50 flex rounded-3x1 p-4' href={`/${item.title.toLowerCase()}`} key={item.title}>
                <div>
                  <item.icon/>
                </div>
                <div>
                  {item.title}
                </div>
              </Link>
            ))
          }
        </section>
        <main>Home timeline</main>
        <section>right section</section>
      </div>
    </div>
  )
}

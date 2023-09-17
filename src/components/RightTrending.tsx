import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightTrending = () => {
  return (
    <section className='mt-2 w-[25%] sticky top-2 overflow-auto items-stretch flex flex-col px-6 ml-auto h-screen'>
        <div>
            <div className='relative w-full h-full group'>
            <input 
                id='searchBox'
                type="text" 
                placeholder='Search Twitter' 
                className='peer outline-none focus:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-full py-4 pl-14 pr-4'/>
                <label 
                htmlFor='searchBox' 
                className='absolute top-0 left-0 h-full flex items-center justify-center p-4 peer-focus:text-primary'>
                    <BsSearch className="w-5 h-5"/>
                </label>
            </div>
        </div>
        <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-xl my-2 px-4'>What's happening</h3>
            <div>
                {
                Array.from({length: 5}).map((_,i) => (
                    <div key={i} className='hover:bg-white/10 p-4 last:rounded-b-xl transition duration-200'>
                    <div className='font-bold text-lg'>#trending{i+1}</div>
                    <div className='text-xs text-neutral-400'>35.8k</div>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col rounded-xl bg-neutral-900 my-4'>
            <h3 className='font-bold text-xl my-2 px-4'>Who to follow</h3>
            <div>
                {
                Array.from({length: 4}).map((_,i) => (
                    <div key={i} className='hover:bg-white/10 justify-between flex items-center p-4 last:rounded-b-xl transition duration-200'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-10 h-10 bg-neutral-600 rounded-full'></div>
                        <div className='flex flex-col'>
                        <div className='font-bold text-white'>Other User</div>
                        <div className='text-gray-500 text-xs'>@otheruser1234</div>
                        </div>
                    </div>
                    <div>
                        <button className='rounded-full px-6 py-2 bg-white text-neutral-950'>
                        Follow
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RightTrending
import React from 'react';
import {ArrowDownTrayIcon,
        CircleStackIcon,
        CloudArrowUpIcon,
        ServerStackIcon}
        from '@heroicons/react/24/outline';
import backGround2 from '../components/photo/backGround2.png'

const Hero = () => {
  return (
    <div className='w-full h-screen border-t-indigo-300 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-gray-400 text-2xl ml-4'>Unique Sequencing & Production</p>
                <h1 className='text-4xl text-blue-500 font-bold py-3 ml-4 md:text-7xl font-mono '>WEB DEVELOPMENT</h1>
                <p className='text-gray-500 font-extralight ml-4'>THIS IS OUR TECH BRAND</p>
                <button className='drop-shadow-lg ml-4 px-1 py-1 bg-orange-200 rounded hover:-translate-y-1 hover:bg-yellow-100 hover:text-zinc-400 px-8 py-3 text-lg font-bold text-gray-500'>GET STARTED</button>
            </div>
            <div>
                <img className='w-full opacity-70 h-full' src={backGround2} rel='/'/>
            </div>
            <div className='apsolute w-full mb-3  ml-[10px] mr-[10px]  flex flex-col py-6  botton-[-5%] lx-1 md:left-0.5 transform md:translate-x-0.5 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
                <p className='font-bold text-violet-500 drop-shadow-lg'>Data services</p>
                <div className='text-sm flex justify-between flex-wrap px-4'>
                    <p className='cursor-pointer flex px-4 py-2 drop-shadow-lg'><ArrowDownTrayIcon className='h-6  text-purple-600 mr-1' /> App security</p>
                    <p className='cursor-pointer flex px-4 py-2 drop-shadow-lg'><CircleStackIcon className='h-6  text-purple-600 mr-1'/> Dashboard design</p>
                    <p className='cursor-pointer flex px-4 py-2 drop-shadow-lg'><ServerStackIcon className='h-6  text-purple-600 mr-1'/> Cloud Data</p>
                    <p className='cursor-pointer flex px-4 py-2 drop-shadow-lg'><CloudArrowUpIcon className='h-6  text-purple-600 mr-1' /> API's</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React, { useState } from 'react';
import {EllipsisVerticalIcon ,XMarkIcon} from '@heroicons/react/24/outline';

const Navbar = () => {

const [nav, setNav]=useState(false);
const handleClick =() => setNav(!nav);


  return (

    <div className='text-center cursor-pointer items-center border p-4rem bg-slate-300 font-mono justify-between	font-[900] text-lg drop-shadow-md brightness-90	flex	z-10'>

    <h2 className='text-3xl pl-[10px] font-bold mr-4rem text-white hover:text-blue-100'>PSYCHO CODING.</h2>

     <ul className=' hidden md:flex text-white flex text-sm  justify-between mr-[5px]'>
       <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>Home</li>
       <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>About</li>
       <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>My Works</li>
       <li className='ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-blue-300'>Contact</li>
     </ul>

     <div className='hidden md:flex pr-4'>
        <button className='hover:-translate-y-1 hover:scale-110 hover:text-gray-400 border-none text-sm bg-transparent mr-4 text-blue-400'>Sign in</button>
        <button className='px-1 py-1 bg-orange-100 rounded hover:-translate-y-1 hover:bg-blue-100 hover:text-gray-400 px-8 py-3 text-sm text-gray-500'>Sign up</button>
     </div>

     <div className='md:hidden' onClick={handleClick}>
        {!nav ? <EllipsisVerticalIcon className='w-5 text-sm text-white  w-6 h-6  hover:text-red-400' /> : <XMarkIcon className='w-5 text-sm text-white  w-6 h-6  hover:text-red-400'/>}
     </div>

     <ul className=  {!nav ? 'hidden ease-in-out': 'ease-in-out mt-[160px] absolute bg-violet-200 w-full px-8'}>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white text-sm'>Home</li>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white text-sm'>About</li>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white text-sm'>My Works</li>
       <li className='border-b-2 border-teal-200 w-full ml-[10px] hover:-translate-y-1 hover:scale-110 hover:text-gray-500 text-white text-sm'>Contact</li>
       <button className='hover:-translate-y-1 hover:scale-110 hover:text-gray-400 border-[1px] rounded text-sm bg-transparent mr-4 text-blue-400'>Sing in</button>
       <button className='px-[1px] py-[1px]  mb-[2px] bg-blue-100 rounded hover:-translate-y-1 hover:bg-blue-100 hover:text-gray-400 px-8 py-3 text-sm text-gray-500'>Sing up</button>
     </ul>
     
     

    </div>
  )
}

export default Navbar
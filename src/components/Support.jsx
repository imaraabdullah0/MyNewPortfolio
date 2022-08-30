import React from 'react';
import {
    PhoneIcon,
    CpuChipIcon,
    GlobeAltIcon,
    ChevronDoubleRightIcon
} from '@heroicons/react/24/outline';
import supportTeam from '../components/photo/supportTeam.png';

const Support = () => {
  return (
    <div className='w-full  my-20 sm:mx-4'>
        <div className='w-full h-[700px] bg-slate-800/90 rounded-xl absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportTeam} rel='/'/>
        </div>

    <div className='max-w-[1240px] mx-auto relative' >

      <div className='pt-[100px] px-4 py-12 text-center text-white'>
         <h3 className='font-bold pt-16 text-yellow-300 text-2xl drop-shadow-md'>Support</h3>
         <p className='font-bold text-violet-300 text-6xl mb-8'>Find the right team</p>
         <p className='text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium nisi dolores saepe molestiae, inventore necessitatibus. Obcaecati voluptatem commodi itaque, aut aperiam quibusdam natus, deleniti nostrum consectetur nam inventore totam?</p>
      </div>

      <div className=' grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gao-y-16 px-4 pt-12 sm:pt-20'>
      <div className='bg-white rounded-xl mt-10 shadow-2xl p-8 '>
        <div className='p-8'>
          <PhoneIcon className='w-16  bg-violet-700 text-white rounded-xl mt-[-6rem]'/>
          <h2 className='font-bold text-lg my-6'> Sales</h2>
          <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur minus voluptate nam dolorem, odio dignissimos fugit facere nobis error corrupti consequuntur omnis natus sapiente officiis laboriosam mollitia quo suscipit.</p>
        </div>
        <div className='w-[150px] bg-slate-200 rounded-lg pl-8 py-4 cursor-pointer shadow-lg'>
            <p className='flex items-center text-md   text-indigo-500'>contact us <ChevronDoubleRightIcon className='w-4' /></p>
        </div>
        </div>
     

        <div className='bg-white rounded-xl mt-10 shadow-2xl p-8 '>
        <div className='p-8'>
          <GlobeAltIcon className='w-16  bg-violet-700 text-white rounded-xl mt-[-6rem]'/>
          <h2 className='font-bold text-lg my-6'>Technical Support</h2>
          <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur minus voluptate nam dolorem, odio dignissimos fugit facere nobis error corrupti consequuntur omnis natus sapiente officiis laboriosam mollitia quo suscipit.</p>
        </div>
        <div className='w-[150px] bg-slate-200 rounded-lg pl-8 py-4 cursor-pointer shadow-lg'>
            <p className='flex items-center text-md   text-indigo-500'>contact us <ChevronDoubleRightIcon className='w-4' /></p>
        </div>
        </div>
     
        
        <div className='bg-white rounded-xl shadow-2xl p-8 mt-10'>
            <div className='p-8'>
          <CpuChipIcon className='w-16  bg-violet-700 text-white rounded-xl mt-[-6rem]'/>
          <h2 className='font-bold text-lg my-6'>Media Inquiries</h2>
          <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur minus voluptate nam dolorem, odio dignissimos fugit facere nobis error corrupti consequuntur omnis natus sapiente officiis laboriosam mollitia quo suscipit.</p>
        </div>
        <div className='w-[150px] bg-slate-200 rounded-lg pl-8 py-4 cursor-pointer shadow-lg '>
            <p className='flex items-center text-md   text-indigo-500'>contact us <ChevronDoubleRightIcon className='w-4' /></p>
        </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Support
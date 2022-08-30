import React from 'react';
import {CheckIcon} from '@heroicons/react/24/solid';


const Pricing = () => {
  return (
    <div className='w-full m-4 text-center'>
    
        <div className='m-4 pb-40 border border-gray-400 drop-shadow-lg bg-slate-800 rounded-3xl text-zinc-400 p-5'>
            <h2 className='text-white font-mono font-bold text-2xl'>The right price for your research</h2>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto numquam quisquam suscipit harum, sed minima id tempore labore quidem minus libero corporis, unde perferendis rerum dolorem est inventore veritatis amet?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam hic quas sequi sit aliquid quod, nulla voluptatibus voluptas possimus, officia eius a eligendi quibusdam nesciunt rem obcaecati accusantium fugiat.</p>
        </div>
<div className='grid grid-cols-2 '>
        <div className=' my-[-8rem] mb-4 mx-7 relative border border-indigo-500 rounded-3xl bg-slate-200 '>
            <p className='border border-blue-400 w-24 bg-blue-900 m-5 text-white text-sm rounded-2xl'>STANDARD</p>
            <h2 className='text-4xl font-bold text-fuchsia-900 drop-shadow-md'>$49 <p className='text-sm inline '>/mo</p></h2>
            
            <p className='m-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad adipisci esse animi consequatur in illo neque, nulla perspiciatis iure.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem ipsum dolor sit.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem, ipsum dolor.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem, ipsum dolor.</p>
        </div>

        <div className=' my-[-8rem] mb-4 mx-7 relative border border-indigo-500 rounded-3xl bg-slate-200 '>
            <p className='border border-blue-400 w-24 bg-blue-400 m-5 text-white text-sm rounded-2xl'>PREMUME</p>
            <h2 className='text-4xl font-bold text-fuchsia-900 drop-shadow-md'>$89 <p className='text-sm inline '>/mo</p></h2>
            
            <p className='m-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad adipisci esse animi consequatur in illo neque, nulla perspiciatis iure.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem ipsum dolor sit.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem, ipsum dolor.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem ipsum dolor sit amet consectetur.</p>
            <p className='text-start m-2'><CheckIcon className='w-6 ml-5 inline text-green-400 text-start'/>Lorem, ipsum dolor.</p>
        </div>

        
    </div>

    </div>
  )
}

export default Pricing
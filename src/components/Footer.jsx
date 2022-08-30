import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaYahoo } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='relative bg-indigo-900 text-start text-white w-full'>
        <div className='grid grid-cols-2 mx-4 my-4 p-4'>
            <div>
              <h2 className='font-bold drop-shadow-xl translate-x-2'>SOLUTIONS</h2>
              <p className='cursor-pointer text-sm text-slate-400'>Markting</p>
              <p className='cursor-pointer text-sm text-slate-400'>Data</p>
              <p className='cursor-pointer text-sm text-slate-400'>Cloud</p>
            </div>

            <div>
              <h2 className='font-bold drop-shadow-xl translate-x-2'>COMPANY</h2>
              <p className='cursor-pointer text-sm text-slate-400'>About</p>
              <p className='cursor-pointer text-sm text-slate-400'>Blog</p>
              <p className='cursor-pointer text-sm text-slate-400'>Jobs</p>
            </div>

            <div>
              <h2 className='font-bold drop-shadow-xl translate-x-2'>SUPPORT</h2>
              <p className='cursor-pointer text-sm text-slate-400'>Pricing</p>
              <p className='cursor-pointer text-sm text-slate-400'>Decumintation</p>
              <p className='cursor-pointer text-sm text-slate-400'>API Status</p>
            </div>

            <div>
              <h2 className='font-bold drop-shadow-xl translate-x-2'>LEGAL</h2>
              <p className='cursor-pointer text-sm text-slate-400'>Claims</p>
              <p className='cursor-pointer text-sm text-slate-400'>Privacy</p>
              <p className='cursor-pointer text-sm text-slate-400'>Terms</p>
            </div>
        </div>

        <div className='mx-4 my-4 p-4'>
            <p className='text-xl text-indigo-300 font-bold'>Supscribe For our newsletter</p>
            <input type="mail" className='text-gray-600 p-0.5 border border-white rounded-lg mt-2 bg-red-100'></input>
            <button className='border border-purple-400 rounded-xl p-0.5 ml-1 font-thin font-bold bg-purple-400'>SUPSCRIBE</button>
        </div>

        <hr className='text-slate-400'/>

        <div className='mx-4 my-4 p-4'>
            <h2 className='font-bold drop-shadow-xl translate-x-2'>CONTACT US</h2>
            
            <p className='cursor-pointer text-sm text-slate-400'><FaInstagram className='inline' /> instagram</p>
            <p className='cursor-pointer text-sm text-slate-400'><FaLinkedin className='inline'/> LINKEDIN</p>
            <p className='cursor-pointer text-sm text-slate-400'><FaGithub className='inline'/> GitHup</p>
            <p className='cursor-pointer text-sm text-slate-400'><FaYahoo className='inline'/> Yahoo</p>
        </div>
    </div>
  )
}

export default Footer
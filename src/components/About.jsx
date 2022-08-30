import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen my-24 '>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='font-bold text-4xl drop-shadow-lg text-violet-400'>Trusted by Developer across the world</h2>
                <p className='text-lg py-6 text-gray-700 drop-shadow-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem repellat dolore minima libero? Ab animi totam quaerat enim, dolor nemo esse magni quisquam maxime labore? Saepe asperiores enim esse.</p>
            </div>

        <div className='grid md:grid-cols-3 gap-1 px-3 text-center'>
            <div className='border py-8 rounded-2xl shadow-xl'>
                <p className='text-6xl font-bold text-violet-900 drop-shadow-md mt-4'>100%</p>
                <p className='text-lg text-gray-500 drop-shadow-md mt-4'>completion</p>
            </div>
            <div className='border py-8 rounded-2xl shadow-xl'>
                <p className='text-6xl font-bold text-violet-900 drop-shadow-md mt-4'>24/7</p>
                <p className='text-lg text-gray-500 drop-shadow-md mt-4'>Delivery</p>
            </div>
            <div className='border py-8 rounded-2xl shadow-xl'>
                <p className='text-6xl font-bold text-violet-900 drop-shadow-md mt-4'>100K</p>
                <p className='text-lg text-gray-500 drop-shadow-md mt-4'>Transactions</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
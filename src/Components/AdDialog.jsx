import React from 'react'

export default function AdDialog() {
  return (
    <div className='flex flex-col ad-dialog mr-6 ml-6 rounded-lg mt-10'>
    <p className='text-xl text-white font-bold self-center mt-6 w-4/6 text-center'>Get Started with KoinX for FREE</p>
    <p className='text-white self-center ml-6 mr-6 mt-6 text-center'>with our range of feauters that you can equip for free  , KoinX allows you to be more 
    educated and aware of  your tax reports</p>
    <div className='w-2/3 self-center'>
        <img src='/Images/koinx_vector.png'/>
    </div>
    <p className='flex items-center justify-between p-3 bg-white text-black w-max text-sm font-semibold self-center rounded-md mb-6'>Get Started for FREE 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 ml-1 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</p>
    </div>
  )
}

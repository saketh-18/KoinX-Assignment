import React from 'react';
import Fundamentals from './Fundamentals';

export default function Overview() {

  return (
    <div className='bg-white rounded-md ml-6 mt-6 mr-6 flex flex-col'>
        <p className='text-xl font-semibold ml-6 mt-4'>Performance</p>
        <div className='flex ml-6 mt-4 items-center'>
            <div className='flex flex-col'>
                <p className=' text-xs'>Today's Low</p>
                <p className='text-sm'>46,930.22</p>
            </div>
            <div className='w-2/3 flex flex-col ml-2 mr-2 mt-3'>
                <div className='w-full bg-gradient-to-r from-red-600 via-yellow-400 to-emerald-400 h-2 rounded-md'></div>
                <div className='self-center flex flex-col'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="play-rotate w-3 h-3">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-xs font-thin'>$48,637.83</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className=' text-xs'>Today's High</p>
                <p className='text-sm'>46,950.22</p>
            </div>
        </div>
        <div className='flex ml-6 mt-4 items-center'>
            <div className='flex flex-col'>
                <p className=' text-xs'>Today's Low</p>
                <p className='text-sm'>46,930.22</p>
            </div>
            <div className='w-2/3 flex flex-col ml-2 mr-2 mt-3'>
                <div className='w-full bg-gradient-to-r from-red-600 via-yellow-400 to-emerald-400 h-2 rounded-md'></div>
            </div>
            <div className='flex flex-col'>
                <p className=' text-xs'>Today's High</p>
                <p className='text-sm'>46,950.22</p>
            </div>
        </div>
        <Fundamentals />
    </div>
  )
}

import React from 'react'

export default function HorizontalMenu() {
  return (
    <div className='flex mr-18 w-full'>
            <div className='menu-h flex flex-col ml-8 w-full mr-8 mt-6 '>
                <div className='menu-scroll-container flex justify-between'>
                    <p className='hover:text-sky-600 text-gray-500 text-md font-medium hover:underline hover:underline-offset-4 z-30'>Overview</p>
                    <p className='hover:text-sky-600 text-gray-500 text-md font-medium hover:underline hover:underline-offset-4 z-30'>Fundamentals</p>
                    <p className='hover:text-sky-600 text-gray-500 text-md font-medium hover:underline hover:underline-offset-4 z-30'>News Insights</p>
                    <p className='hover:text-sky-600 text-gray-500 text-md font-medium hover:underline hover:underline-offset-4 z-30'>Sentiments</p>
                    <p className='hover:text-sky-600 text-gray-500 text-md font-medium hover:underline hover:underline-offset-4 z-30'>Team</p>
                </div>
                <div className='w-full h-rule bg-gray-300 rounded-sm'></div>
            </div>
    </div>
  )
}

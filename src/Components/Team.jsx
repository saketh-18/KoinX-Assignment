import React from 'react'

export default function Team() {
  return (
    <div className='flex flex-col bg-white ml-6 mr-6 mt-6 mb-6 rounded-md'>
        <p className='text-xl font-semibold ml-6 mr-6 mt-6'>Team</p>
        <p className='text-sm ml-6 mr-6'>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        </p>
        <div className='team-cards flex flex-col ml-6 mr-6'>
            <div className='team-card flex flex-col sm:flex-row items-center rounded-md p-1 bg-sky-100 mt-6 mb-6'>
                <div className='photo-name flex-col flex justify-center items-center w-1/6'>
                    <img src='/Images/a-man.jpg' className='w-20 rounded-md'/>
                    <p className='text-sm font-semibold'>John Doe</p>
                    <p className='text-gray-400 text-sm'>System Analyst</p>
                </div>
                <p className='text-sm r w-4/6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
            </div>
            <div className='team-card flex flex-col sm:flex-row items-center rounded-md p-1 bg-sky-100 mt-6 mb-6'>
                <div className='photo-name flex-col flex justify-center items-center w-1/6'>
                    <img src='/Images/a-man.jpg' className='w-20 rounded-md'/>
                    <p className='text-sm font-semibold'>John Doe</p>
                    <p className='text-gray-400 text-sm'>System Analyst</p>
                </div>
                <p className='text-sm self-center w-4/6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
            </div>
            <div className='team-card flex flex-col sm:flex-row items-center rounded-md p-1 bg-sky-100 mt-6 mb-6'>
                <div className='photo-name flex-col flex justify-center items-center sm:w-1/6 w-full'>
                    <img src='/Images/a-man.jpg' className='w-20 rounded-md'/>
                    <p className='text-sm font-semibold'>John Doe</p>
                    <p className='text-gray-400 text-sm'>System Analyst</p>
                </div>
                <p className='text-sm self-center w-4/6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>
            </div>
        </div>
    
    </div>
  )
}

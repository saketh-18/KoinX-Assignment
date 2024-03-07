import React from 'react'

export default function Tokenomics() {
  return (
    <div className='flex flex-col ml-6 mr-6 mt-6 bg-white rounded-md'>
        <p className='text-xl font-semibold ml-6 mt-6'>Tokenomics</p>
        <p className='text-lg font-semibold ml-6 mt-6 mb-6'>Initial Distribution</p>
        <div className='flex flex-row'>
            <div>
                <div className='w-36 h-36 rounded-full tokenomics-pie ml-6'></div>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='flex items-center'>
                    <div className='w-2 h-2 rounded-full bg-blue-400 ml-6'></div>
                    <p className='ml-1'>Crowdsale Investors : 80%</p>
                </div>
                <div className='flex items-center'>
                    <div className='w-2 h-2 rounded-full bg-yellow-400 ml-6'></div>
                    <p className='ml-1'>Foundation : 20%</p>
                </div>
            </div>
        </div>
        <p className='text-md font-normal ml-6 mr-6 mt-6 mb-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
    </div>
  )
}

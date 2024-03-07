import React from 'react'

export default function AboutBitcoin() {
  return (
    <div className='flex flex-col bg-white ml-6 mr-6 rounded mt-6 py-2'>
        <div>
            <p className='font-semibold text-xl ml-6 mb-6 mt-6'>About Bitcoin</p>
            <p className='text-sm ml-6 mb-6 mr-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <hr className='ml-6 mr-6'/>
            <p className='font-semibold text-xl bold ml-6 mt-6'>About Bitcoin</p>
            <p className='text-sm ml-6 mt-6  mr-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p className='text-sm ml-6 mt-10 mr-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p className='text-sm ml-6 mt-10 mr-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <hr className='ml-6 mr-6 mt-6 mb-6'/>
            <div className='flex flex-col items-baseline'>
                <p className='text-xl font-semibold ml-6 mb-6 self-center'>Already Holding Bitcoin ?</p>
                <div className='cards flex sm:flex-row flex-col justify-center items-center self-center w-full'>
                    <div className='card flex bg-gradient-to-br from-cyan-300 to-cyan-900 rounded-md ml-6 mb-6 h-max sm:w-1/2 w-11/12 mr-6'>
                        <div className='w-32 p-2'>
                            <img src='/Images/beautiful-cryptocurrency-hologram-design.jpg' className='rounded-lg w-full self-center'/>
                        </div>
                        <div className='flex flex-col justify-center p-2'>
                            <p className='text-xl font-semibold mt-2 mb-2 text-white self-center'>Calculate Your Profits</p>
                            <p className='button flex items-center p-1 w-max font-semibold rounded bg-white'>Check now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" self-center mt-1 w-5 ml-1 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></p>
                        </div>
                    </div>
                    <div className='card flex bg-gradient-to-br from-amber-500 to-red-500 rounded-md ml-6 mb-6 h-max sm:w-1/2 w-11/12 mr-6'>
                    <div className='w-32 p-2'>
                            <img src='/Images/beautiful-cryptocurrency-hologram-design.jpg' className='rounded-lg w-full self-center'/>
                        </div>
                        <div className='flex flex-col justify-center p-2'>
                            <p className='text-xl font-semibold mt-2 text-white mb-2 self-center'>Calculate Your Profits</p>
                            <p className='flex items-center button p-1 rounded font-semibold w-max bg-white'>Check now 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" self-center mt-1 w-5 ml-1 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></p>
                        </div>
                    </div>
                </div>
                <hr className='ml-6 mr-6 mt-2 mb-6'/>
                <p className='ml-6 mr-6 text-sm'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
            </div>
        </div>    
    </div>
  )
}

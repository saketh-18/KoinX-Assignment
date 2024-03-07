import React, { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center bg-white h-auto px-6 py-4'>
        <div className='w-max h-auto'>
          <img src='/Images/logo.svg' className='h-8' alt='Logo' />
        </div>
        <div className='sm:hidden'>
          <button
            onClick={toggleMenu}
            className='block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none'
            onFocus={() => setMenuOpen(true)}
            onBlur={() => setMenuOpen(false)}
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z'
              />
            </svg>
          </button>
        </div>
        <div className='hidden sm:flex justify-between w-2/5 items-center'>
          <p className='text-md font-semibold'>Crypto Taxes</p>
          <p className='text-md font-semibold'>Free Tools</p>
          <p className='text-md font-semibold'>Resource Center</p>
          <button className='bg-gradient-to-r from-violet-600 to-indigo-600 rounded text-white px-4 py-2'>Get Started</button>
        </div>
      </div>
      {menuOpen && (
        <div className='absolute w-full bg-white border border-gray-200 mt-2 shadow z-20'>
          <p className='text-md font-semibold p-4'>Crypto Taxes</p>
          <p className='text-md font-semibold p-4'>Free Tools</p>
          <p className='text-md font-semibold p-4'>Resource Center</p>
          <button className='bg-gradient-to-r from-violet-600 to-indigo-600 rounded text-white px-4 py-2 m-4'>Get Started</button>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-600 shadow-lg p-4'>
      <div className='flex justify-center gap-6'>
        <NavLink
          to='/'
          className='text-gray-300 font-semibold text-lg px-4 py-2 sm:px-6 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300 active:bg-blue-600 active:text-white'>
          Home
        </NavLink>

        <NavLink
          to='/pastes'
          className='text-gray-300 font-semibold text-lg px-4 py-2 sm:px-6 rounded-lg hover:bg-gray-700 hover:text-white transition duration-300 active:bg-blue-600 active:text-white'>
          Paste
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

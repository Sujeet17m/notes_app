import React from 'react';
import logo from '../../assets/images.png'; // from src/components/Navbar -> up to src -> assets

function Navbar() {
  return (
    <header className='flex items-center gap-3 p-4 border-b border-gray-300'>
      <div className='w-10 h-10'>
        <img className='w-full h-full object-contain' src={logo} alt="Logo" />
      </div>
      <h1 className='text-3xl font-semibold text-green-800'>NoteThat</h1>
    </header>
  );
}

export default Navbar;


import React from 'react';
import logo from '../../assets/images.png'; // from src/components/Navbar -> up to src -> assets

function Navbar() {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <h1>NoteThat</h1>
    </header>
  );
}

export default Navbar;


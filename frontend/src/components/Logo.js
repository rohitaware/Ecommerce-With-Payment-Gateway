import React from 'react';
import logoImage from '../assest/logo2.jpg'; // Corrected import path

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logo"
      width="90"
      height="50"
      className="object-contain mix-blend-multiply"
    />
  );
};

export default Logo;

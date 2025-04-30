import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Register</Link>
      <Link to="/login" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
      <Link to="/contact" style={{ color: 'white', marginRight: '15px', textDecoration: 'none' }}>Contact</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
    </nav>
  );
};

export default Navbar;

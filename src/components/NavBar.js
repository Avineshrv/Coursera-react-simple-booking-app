import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Little Lemon</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

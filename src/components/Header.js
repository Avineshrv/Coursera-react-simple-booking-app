import React from 'react';
import bgImage from "../images/hotel.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={bgImage} alt="Little Lemon Restaurant" className="header-image" />
        <div className="header-content">
          <h1>Welcome to Little Lemon</h1>
          <p>Book your table now!</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
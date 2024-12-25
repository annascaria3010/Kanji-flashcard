import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className="Nav-bar">
      <div className="titles">Home</div>
      <div className="titles">Flash Cards</div>
      <div className="titles">Quiz</div>
      <div className="titles settings" onClick={toggleDropdown}>
        Settings
        {dropdownVisible && (
          <div className="dropdown">
            <div className="dropdown-item" >Add</div>
            <div className="dropdown-item">Edit</div>
            <div className="dropdown-item">Delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

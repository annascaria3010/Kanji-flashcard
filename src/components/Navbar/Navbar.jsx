import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownClick = (action) => {
    setShowDropdown(false); // Close the dropdown
    navigate(`/settings/${action}`); // Navigate to the appropriate settings page
  };

  return (
    <div className="Nav-bar">
      <Link to="/" className="titles">Home</Link>
      <Link to="/flash-cards" className="titles">Flash Cards</Link>
      <Link to="/quiz" className="titles">Quiz</Link>
      <div className="titles dropdown">
        <span className="titles">Settings</span>
        {showDropdown && (
          <div className="dropdown-menu">
            <div onClick={() => handleDropdownClick('add')}>Add</div>
            <div onClick={() => handleDropdownClick('edit')}>Edit</div>
            <div onClick={() => handleDropdownClick('delete')}>Delete</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

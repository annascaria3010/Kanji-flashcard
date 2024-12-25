import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Nav-bar">
      <Link to="/" className="titles">Home</Link>
      <Link to="/flash-cards" className="titles">Flash Cards</Link>
      <Link to="/quiz" className="titles">Quiz</Link>
      <Link to="/settings" className="titles">Settings</Link>
    </div>
  );
};

export default Navbar;

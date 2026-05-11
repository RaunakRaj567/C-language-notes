import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onMenuClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button className="menu-btn" onClick={onMenuClick}>
            ☰
          </button>
          <Link to="/" className="navbar-logo">
            📚 C theory notes with viva questions
          </Link>
        </div>
        <div className="navbar-center">
          <h2>Master C Programming - Zero to Hero! 🚀</h2>
        </div>
        <div className="navbar-right">
          <span className="badge">v1.0</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

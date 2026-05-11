import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  const location = useLocation();

  const units = [
    { path: '/', label: '🏠 Home' },
    { path: '/unit1', label: '📚 Unit 1: C Basics' },
    { path: '/unit2', label: '⚡ Unit 2: Control Structures' },
    { path: '/unit3', label: '🔧 Unit 3: Functions & Storage' },
    { path: '/unit4', label: '📦 Unit 4: Arrays' },
    { path: '/unit5', label: '🎯 Unit 5: Pointers & Strings' },
    { path: '/unit6', label: '🏗️ Unit 6: Structures & Unions' },
    { path: '/unit7', label: '⭐ Unit 7: C++ Basics' },
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h3>📖 Course Content</h3>
      </div>
      <nav className="sidebar-nav">
        {units.map((unit) => (
          <Link
            key={unit.path}
            to={unit.path}
            className={`sidebar-link ${location.pathname === unit.path ? 'active' : ''}`}
          >
            {unit.label}
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>🚀 Learn at your pace, bhai! 💪</p>
      </div>
    </aside>
  );
}

export default Sidebar;

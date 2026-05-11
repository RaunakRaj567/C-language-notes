import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Unit1 from './pages/Unit1';
import Unit2 from './pages/Unit2';
import Unit3 from './pages/Unit3';
import Unit4 from './pages/Unit4';
import Unit5 from './pages/Unit5';
import Unit6 from './pages/Unit6';
import Unit7 from './pages/Unit7';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="main-content">
          <Sidebar isOpen={sidebarOpen} />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/unit1" element={<Unit1 />} />
              <Route path="/unit2" element={<Unit2 />} />
              <Route path="/unit3" element={<Unit3 />} />
              <Route path="/unit4" element={<Unit4 />} />
              <Route path="/unit5" element={<Unit5 />} />
              <Route path="/unit6" element={<Unit6 />} />
              <Route path="/unit7" element={<Unit7 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

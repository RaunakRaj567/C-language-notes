import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const units = [
    {
      id: 1,
      title: '📚 C Language Basics',
      description: 'Character set, Identifiers, Keywords, Data types, Variables...',
      path: '/unit1',
      color: '#FF6B6B',
      emoji: '🎯'
    },
    {
      id: 2,
      title: '⚡ Control Structures',
      description: 'If, Else, Switch, While, For, Do-while, Break, Continue...',
      path: '/unit2',
      color: '#4ECDC4',
      emoji: '🔄'
    },
    {
      id: 3,
      title: '🔧 Functions & Storage Classes',
      description: 'Function definition, Recursion, Scope rules, Storage classes...',
      path: '/unit3',
      color: '#45B7D1',
      emoji: '⚙️'
    },
    {
      id: 4,
      title: '📦 Arrays in C',
      description: 'Declaration, Initialization, 1D & 2D arrays, Searching, Sorting...',
      path: '/unit4',
      color: '#96CEB4',
      emoji: '🗂️'
    },
    {
      id: 5,
      title: '🎯 Pointers & Strings',
      description: 'Pointer basics, Memory management, String manipulation...',
      path: '/unit5',
      color: '#FFEAA7',
      emoji: '🔗'
    },
    {
      id: 6,
      title: '🏗️ Structures & Unions',
      description: 'Structure declaration, Accessing members, Unions...',
      path: '/unit6',
      color: '#DDA15E',
      emoji: '🎁'
    },
    {
      id: 7,
      title: '⭐ C++ Basics',
      description: 'Classes, Objects, OOP concepts, Member functions...',
      path: '/unit7',
      color: '#BC6C25',
      emoji: '🚀'
    }
  ];

  return (
    <div className="homepage">
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: '1.8rem',
        textAlign: 'center',
        padding: '20px 0',
        marginBottom: '30px',
        marginLeft: '25%',
        marginRight: '25%',
        borderRadius: '10px',
        boxShadow: '0 0 30px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
        letterSpacing: '0.8px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
        animation: 'neonGlow 2s ease-in-out infinite, borderSnake 3s linear infinite',
        border: '3px solid transparent',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%), conic-gradient(from 0deg, #ff1493, #ff69b4, #ff1493)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        position: 'relative'
      }}>
        <style>{`
          @keyframes neonGlow {
            0%, 100% {
              box-shadow: 0 0 30px rgba(102, 126, 234, 0.6), 0 0 30px rgba(118, 75, 162, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2);
            }
            50% {
              box-shadow: 0 0 50px rgba(102, 126, 234, 0.9), 0 0 50px rgba(118, 75, 162, 0.9), inset 0 0 30px rgba(255, 255, 255, 0.3);
            }
          }
          @keyframes borderSnake {
            0% {
              background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%), conic-gradient(from 0deg, #ff1493, #ff69b4, #ff1493);
            }
            100% {
              background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%), conic-gradient(from 360deg, #ff1493, #ff69b4, #ff1493);
            }
          }
        `}</style>
        Made By Ron
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>🚀 C Language Learning Portal 🚀</h1>
          <p className="tagline">Master C Programming - Zero to Hero! 💪</p>
          <p className="subtitle">
            Bro, it's time to level up your C programming arc and become a goated developer! 
            From total noob to absolute sigma, we got you covered fr fr! 🎓 No cap.
          </p>
          <div className="hero-buttons">
            <Link to="/unit1" className="btn btn-primary">
              Let's Gooo! (Start Vibe Check) 🎯
            </Link>
            <button className="btn btn-secondary">
              Binge All Units 📚
            </button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-card card-1">💻</div>
          <div className="floating-card card-2">⚡</div>
          <div className="floating-card card-3">🔧</div>
        </div>
      </div>

      <section className="features-section">
        <h2>📖 Course Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Detailed Content</h3>
            <p>From total basics to god-tier advanced topics, everything is explained fr! Slaps hard.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Practical Examples</h3>
            <p>Real-world code snippets that are bussin, plus hands-on practice so you don't take an L!</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>Viva Questions</h3>
            <p>30 heavy viva questions with cheat-code answers for every single unit! Huge W.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Interactive Learning</h3>
            <p>High-key engaging content, wild emojis, and total GenZ vibes top to bottom. No cap.</p>
          </div>
        </div>
      </section>

      <section className="units-section">
        <h2>📚 Study Units</h2>
        <div className="units-grid">
          {units.map((unit) => (
            <Link key={unit.id} to={unit.path} className="unit-card" style={{ '--card-color': unit.color }}>
              <div className="unit-emoji">{unit.emoji}</div>
              <h3>{unit.title}</h3>
              <p>{unit.description}</p>
              <div className="unit-footer">
                <span className="unit-number">Unit {unit.id}</span>
                <span className="arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="learning-path">
        <h2>🗺️ Learning Path</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Unit 1: C Basics</h4>
              <p>Characters, Keywords, Data types - Build the foundation! 🏗️</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Unit 2-4: Core Concepts</h4>
              <p>Control structures, Functions, Arrays - Build strong logic! 💪</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Unit 5-6: Advanced Topics</h4>
              <p>Pointers, Structures - Pro-level skills! 🚀</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Unit 7: C++ Transition</h4>
              <p>OOP concepts - Unlock the next level! ⭐</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>You Can Do It! 🎯</h2>
        <p>Let's start this amazing journey! Begin with Unit 1 today!</p>
        <Link to="/unit1" className="btn btn-large">
          Start Now! 🚀
        </Link>
      </section>
    </div>
  );
}

export default HomePage;

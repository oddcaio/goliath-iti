import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">ITI GOLIATH</a>
        <div
          className="menu-icon"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          &#9776;
        </div>
        {showMenu ? (
          <ul className="nav-menu">
            <li className="nav-item"><a href="/" className="nav-links">Home</a></li>
            <li className="nav-item"><a href="/certificados" className="nav-links">Certificados</a></li>
            <li className="nav-item"><a href="/estrutura" className="nav-links">Estrutura</a></li>
            <li className="nav-item">
              <a href="/todas-apis" className="nav-btn">VEJA TODAS APIS</a>
            </li>
          </ul>
        ) : (
          <div className="nav-images">
            <img src="https://placehold.co/40x40" alt="img1" />
            <img src="https://placehold.co/40x40" alt="img2" />
            <img src="https://placehold.co/40x40" alt="img3" />
          </div>
        )}
      </div>
    </nav>
  );
}
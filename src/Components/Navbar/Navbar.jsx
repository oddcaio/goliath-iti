import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.svg';
import Logo2 from '../../assets/segundalogo.png';
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
            <img src={Logo} alt="Logo ITI" width="130" height="auto" />
            <p style={{ fontFamily: "Kumbh Sans, sans-serif", color: "white" }}>
              Ministério da Gestão e da Inovação em Serviços Públicos</p>
            <img src={Logo2} alt="Logo ITI" width="130" height="auto" />
          </div>
        )}
      </div>
    </nav>
  );
}
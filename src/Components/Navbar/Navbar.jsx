import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from '../button/Button';
function Navbar() {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>
          <Link to="/" className='navbar-logo'>Goliath</Link>
        </h2>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/certificados' className='nav-links' onClick={closeMobileMenu}>
              Certificados
            </Link>
            <li className='nav-item'>
              <Link to='/estrutura' className='nav-links' onClick={closeMobileMenu}>
                Estrutura
              </Link>
            </li>
          </li>
        </ul>
        <Button buttonStyle={'btn--outline'}>VEJA TODAS APIS</Button>
      </div>
    </nav>
  );
}

export default Navbar;

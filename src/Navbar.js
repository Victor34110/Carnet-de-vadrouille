import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ title, variant = "default" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onPointerDown = (e) => {
      const el = navRef.current;
      if (!el) return;
      if (!el.contains(e.target)) closeMenu();
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className={`navbar navbar--${variant}`}>
      <div className="navbar-container">
      
        <Link to="/" className="navbar-title" onClick={closeMenu}>
          {title || 'Carnet de Vadrouille'}
        </Link>
        <div id="navbar-links" className={`navbar-links ${isMenuOpen ? 'navbar-links--open' : ''}`}>
          <Link to="/" className="navbar-link" onClick={closeMenu}>Accueil</Link>
          <Link to="/destination" className="navbar-link" onClick={closeMenu}>Destinations</Link>
          <Link to="/Contact" className="navbar-link navbar-contact" onClick={closeMenu}>Contact</Link>
        </div>
        
        {/* Menu burger */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Backdrop (clic en dehors => ferme) */}
      <button
        type="button"
        className={`navbar-backdrop ${isMenuOpen ? 'navbar-backdrop--open' : ''}`}
        onClick={closeMenu}
        aria-label="Close menu"
        tabIndex={isMenuOpen ? 0 : -1}
      />
    </nav>
  );
}

export default Navbar;